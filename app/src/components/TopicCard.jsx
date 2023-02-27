import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledTopicCardWrapper = styled.article`
  background-color: #fafafa;
  font-family: "Lato", sans-serif;
  border-radius: 8px;
  -webkit-box-shadow: 10px 10px 50px -33px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 50px -33px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 50px -10px rgba(0, 0, 0, 0.75);
  max-height: fit-content;
  min-height: 400px;
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
  font-family: "DM Serif Display", "Lato", sans-serif;
  background-color: #1c1c38;
  color: #fafafa;
  padding: 0.35rem 1rem;
  border-radius: 8px 8px 0 0;
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
  );
}

export default TopicCard