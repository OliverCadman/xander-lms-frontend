import React, {useState, useEffect} from "react";
import Sidebar from "../admin/Sidebar";
import LessonWindow from "../components/LessonWindow";
import Loading from "../components/Loading";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { BASE_API_URL } from "../api/request";

import { useAuth } from "../context/AuthContext";

import axios from "axios";

import styled from "styled-components";

const StyledContainer = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLessonLinkList = styled.ul`
    list-style-type: none;

`

const StyledLessonLinkItem = styled.li`
    margin: 2rem 0;
    padding: 1rem;
`

const Topic = ({ navHeight, lessons }) => {
  const { id } = useParams();
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const [lesson, setLesson] = useState(null);

  const headers = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  const url = `${BASE_API_URL}/lessons/topics/${id}`;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["lessons"],
    queryFn: async () => {
      return axios.get(url, headers).then((res) => {
        return res.data;
      });
    },
  });

  useEffect(() => {
    if (data) {
        setLoading(true);
        setCurrentLesson();
        setLoading(false);
    }
  }, [data])

  const setCurrentLesson = () => {
    // By default, set the lesson with minimum ID number as first lesson.
    // Lesson ordering is by ID!
    setLoading(true);
    const minID = Math.min(...data.lessons.map(lesson => lesson.id));
    const currentLesson = data.lessons.filter((lesson) => lesson.id === minID);
    setLesson(currentLesson);
    setLoading(false);
  }

  if (loading || isLoading) {
    return (
      <StyledContainer>
        <Loading />
      </StyledContainer>
    );
  } else if (isError) {
    return <h1>Error!</h1>;
  } else {
    return (
      <>
        <Sidebar navHeight={navHeight}>
          <StyledLessonLinkList>
            {data.lessons.map((lesson) => {
              const { lesson_name, id } = lesson;

              return <StyledLessonLinkItem key={id}>{lesson_name}</StyledLessonLinkItem>;
            })}
          </StyledLessonLinkList>
        </Sidebar>
        {lesson ?   <LessonWindow lesson={lesson} /> : '' }
      
      </>
    );
  }
};

export default Topic;
