import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import CodeEditor from "./CodeEditor";
import { loadKlipseScript } from "../helpers/LoadKlipseScript";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { Link } from "react-router-dom";
import Loading from "./Loading";

import { BASE_API_URL } from "../api/request";

import axios from "axios";

const StyledButtonWrapper = styled.footer`
  width: 100%;
  font-family: "Lato", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledFooterParagraph = styled.p`
  font-family: "Lato", sans-serif;
  color: #a8a8a8;
  font-size: 1rem;
`;

const StyledLessonContainer = styled.section`
  min-height: 100%;
  position: relative;
  margin-left: 300px;
  padding: 8rem;
`;

const StyledLessonMainHeader = styled.h1`
  text-align: center;
  font-family: "DM Serif Display", "Lato", sans-serif;
  font-size: 2.875rem;
`;

const StyledTextblockWrapper = styled.div`
  margin: 2rem 0;
`;

const StyledParagraph = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 1.25rem;
  line-height: 2.5rem;
`;

const StyledHeader2 = styled.h2`
  font-family: "DM Serif Display", sans-serif;
  font-size: 1.875rem;
`;


const continueLinkStyles = {
  backgroundColor: "#3c83ef",
  borderRadius: "4px",
  padding: "0.5rem 2.3rem",
  border: "none",
  fontSize: "1.45rem",
  fontFamily: "'Lato', sans-serif",
  color: "#fafafa",
  cursor: "pointer",
  transition: "500ms all ease-in-out",
  width: "50%",
  textDecoration: "none",
  textAlign: 'center',
  marginTop: '1.5rem'
};

const StyledIconSpan = styled.span`
  margin-left: 1rem;
`;

const LessonWindow = ({ nextLessonName, getLessonID, activeExerciseID }) => {

  const [scriptLoaded, setScriptLoaded] = useState(false);

  const { lessonID, moduleID, topicID } = useParams();

  const { token } = useAuth();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      loadKlipseScript();
    }, 500);
    setScriptLoaded((prevState) => !prevState);

    return () => clearTimeout(timeOut);
  }, []);

  const headers = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  useEffect(() => {
    getLessonID(lessonID);
  }, []);

  const url = `${BASE_API_URL}/lessons/lessons/${lessonID}`;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["lesson"],
    queryFn: async () => {
      return axios.get(url, headers).then((res) => {
        return res.data;
      });
    },
  });

  if (isLoading) {
    return (
      <StyledLessonContainer>
        <Loading />
      </StyledLessonContainer>
    );
  } else if (isError) {
    return (
      <StyledLessonContainer>
        <h1>Error!</h1>
      </StyledLessonContainer>
    );
  } else if (scriptLoaded) {
    const { id, lesson_name, lesson_textblocks } = data;
    return (
      <StyledLessonContainer>
        <StyledLessonMainHeader>{lesson_name}</StyledLessonMainHeader>
        <article>
          {lesson_textblocks.map((textblock, index) => {
            const { id, text, text_format } = textblock;

            if (text_format === 4) {
              return (
                <StyledTextblockWrapper key={id}>
                  <StyledParagraph>{text}</StyledParagraph>
                </StyledTextblockWrapper>
              );
            } else if (text_format === 5) {
              return (
                <StyledTextblockWrapper key={id}>
                  <StyledHeader2>{text}</StyledHeader2>
                </StyledTextblockWrapper>
              );
            } else if (text_format === 2) {
              return (
                <StyledTextblockWrapper key={id}>
                  <CodeEditor text={text} />
                </StyledTextblockWrapper>
              );
            }
          })}
        </article>
        <StyledButtonWrapper>
          <StyledFooterParagraph>
            {nextLessonName !== "Move onto the next section"
              ? `Next up: ${nextLessonName}`
              : "Move onto the next section."}
          </StyledFooterParagraph>
          { nextLessonName && nextLessonName.includes("Exercise") ? (
            <a style={continueLinkStyles} href={`/xander-learning/modules/${moduleID}/topics/${topicID}/lessons/exercises/${activeExerciseID}`}>
              Continue
              <StyledIconSpan>
                <FontAwesomeIcon icon={faChevronCircleRight} />
              </StyledIconSpan>
            </a>
          ) : nextLessonName !== "Move onto the next section" ? (
            <a style={continueLinkStyles} href={`${parseInt(lessonID) + 1}`}>
              Continue
              <StyledIconSpan>
                <FontAwesomeIcon icon={faChevronCircleRight} />
              </StyledIconSpan>
            </a>
          ) : nextLessonName === "Move onto the next section" ? (
            <a style={continueLinkStyles} href={`/xander-learning/modules/${moduleID}`}>
              Go Back to Modules
              <StyledIconSpan>
                <FontAwesomeIcon icon={faChevronCircleRight} />
              </StyledIconSpan>
            </a>
          ) : ''}
        </StyledButtonWrapper>
      </StyledLessonContainer>
    );
  }
};

export default LessonWindow;
