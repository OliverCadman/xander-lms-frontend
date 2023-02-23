import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const StyledHomeContainer = styled.div`
  min-height: ${(props) => `calc(100vh - ${props.navbarheight}px)`};
  background-color: #e9d2c0;
  display: grid;
  place-items: center;
`;
const StyledHomeWrapper = styled.div`
  width: 100%
  max-width: 800px;
`;

const StyledContentContainer = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  column-gap: 2.5rem;
  grid-template-columns: 1fr 2px 1fr;
  padding: 1rem 0;
`;

const StyledContentWrapper = styled.div`
  width: 100%;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
`;

const StyledPara = styled.p`
  font-size: 2rem;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  text-align: left;
  color: #00a878;
  margin-bottom: 0;
`;

const StyledPara2 = styled.p`
  font-size: 2rem;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  text-align: left;
  margin-top: 0.25rem;
  margin-bottom: 0;
`;

const StyledPara3 = styled.p`
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: 1;
  text-align: left;
  margin-top: 0.25rem;
  margin-bottom: 0;
`;

const StyledButton = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  font-family: "Lato", sans-serif;
  color: #fafafa;
  font-size: 1rem;
  padding: 0.65rem;
  margin-top: 1rem;
  width: 50%;
  background-color: #00a878;
  transition: background-color 0.15s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #034f39;
  }
`;

const StyledHomeImage = styled.img`
  height: 110% !important;
`;

const linkStyle = {
  textDecoration: "none",
  color: "#fafafa",
  fontFamily: "Lato, sans-serif",
  fontWeight: 300,
};

const Home = ({ navbarheight }) => {
  return (
    <StyledHomeContainer navbarheight={navbarheight}>
      <StyledHomeWrapper>
        <StyledContentContainer>
          <StyledContentWrapper>
            <StyledPara>Access Online</StyledPara>
            <StyledPara2>Dedicated Resources For</StyledPara2>
            <StyledPara2>Software Engineering</StyledPara2>
            <StyledPara3>
              Delve into the realms of software engineering exploring
            </StyledPara3>
            <StyledPara3>
              key aspects regarding both the front-end and back-end
            </StyledPara3>
            <StyledPara3>
              respectively through this dedicated course curated by
            </StyledPara3>
            <StyledPara3>
              top teachers in the industry. The contents of the course
            </StyledPara3>
            <StyledPara3>
              include: HTML, CSS, JavaScript, AWS, SQL, Python and
            </StyledPara3>
            <StyledPara3>many more.</StyledPara3>
            <Link style={linkStyle} to="/xander-learning/modules">
              <StyledButton>Begin Learning</StyledButton>
            </Link>
          </StyledContentWrapper>
          <StyledContentWrapper />
          <StyledContentWrapper>
            <StyledHomeImage
              src="../../src/assets/Thinking_Man.png"
              alt="Home Page Icon"
              width="350"
              height="360"
            />
          </StyledContentWrapper>
        </StyledContentContainer>
      </StyledHomeWrapper>
    </StyledHomeContainer>
  );
};

export default Home;
