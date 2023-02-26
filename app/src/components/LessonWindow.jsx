import React, {useEffect, useState} from "react";
import styled from "styled-components";
import CodeEditor from "./CodeEditor";
import { loadKlipseScript } from "../helpers/LoadKlipseScript";


const StyledLessonContainer = styled.section`
  min-height: 100%;
  position: relative;
  margin-left: 300px;
  padding: 8rem;
`;

const StyledLessonMainHeader = styled.h1`
  text-align: center;
  font-family: "DM Serif Display", "Lato", sans-serif;
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

const LessonWindow = ({ lesson }) => {
    const [scriptLoaded, setScriptLoaded] = useState(false);
useEffect(() => {
    console.log('hello')
    loadKlipseScript();
        setScriptLoaded(true)

}, []);

  const { lesson_name, lesson_textblocks } = lesson[0];
  console.log(lesson);
  return (
    <StyledLessonContainer>
      <StyledLessonMainHeader>{lesson_name}</StyledLessonMainHeader>
      <article>
        {lesson_textblocks.map((textblock, index) => {
          const { id, text, text_format } = textblock;
          console.log(text, text_format);
          if (text_format === 4) {
            return (
              <StyledTextblockWrapper key={id}>
                <StyledParagraph>{text}</StyledParagraph>
              </StyledTextblockWrapper>
            );
          } else if (text_format === 5) {
            return <StyledTextblockWrapper key={id}>
                <StyledHeader2>
                    {text}
                </StyledHeader2>
            </StyledTextblockWrapper>;
          } else if (text_format === 2) {
            return (
              <StyledTextblockWrapper key={id}>
                {scriptLoaded && <CodeEditor text={text} />}
              </StyledTextblockWrapper>
            );
          }
        })}
      </article>
    </StyledLessonContainer>
  );
};

export default LessonWindow;
