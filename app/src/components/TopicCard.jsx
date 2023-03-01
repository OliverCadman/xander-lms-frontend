import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledTopicCardWrapperWrapper = styled.div`
  border: 1px solid black;
  padding: 1rem;
`

const StyledTopicCardWrapper = styled.article`
  border: 1px solid black;
  font-family: "Lato", sans-serif;
  max-height: fit-content;
  min-height: 400px;
  background-color: #D9D9D9;
  position: relative;
`;

const StyledTopicList = styled.ol`
  padding: 0.45rem 1rem;
  margin-left: 1rem;
`;

const StyledListItem = styled.li`
  margin: 1rem 0;
`

const StyledTopicCardHeader = styled.h2`
  display: flex;
  justify-content; center;
  font-family: "DM Serif Display", "Lato", sans-serif;
  font-size: 30px;
  background-color: #D9D9D9;
  color: black;
  padding: 0.35rem 1rem;
`;

const linkStyle = {
  backgroundColor: "rgb(50 149 51)",
  borderRadius: "10px",
  padding: ".4rem .25rem",
  border: "none",
  fontSize: "1.45rem",
  fontFamily: "Lato, sans-serif",
  color: "#fafafa",
  cursor: "pointer",
  display: "block",
  margin: "0.2875rem",
  textDecoration: 'none',
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  textAlign: 'center'
};

const TopicCard = ({topicName, lessons, id, moduleID}) => {
  return (
    <StyledTopicCardWrapperWrapper>
      <StyledTopicCardWrapper>
        <StyledTopicCardHeader>{topicName}</StyledTopicCardHeader>
        <StyledTopicList>
          {lessons &&
            lessons.map((lesson) => {
              const { id, lesson_name } = lesson;
              return <StyledListItem key={id}>{lesson_name}</StyledListItem>;
            })}
        </StyledTopicList>
        <a style={linkStyle} href={`${moduleID}/topics/${id}`}>Begin Learning</a>
      </StyledTopicCardWrapper>
    </StyledTopicCardWrapperWrapper>
  );
}

export default TopicCard