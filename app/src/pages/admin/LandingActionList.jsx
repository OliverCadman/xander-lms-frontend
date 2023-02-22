import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

const StyledActionListHeaderWrapper = styled.div`
    margin-top: 4rem;
`

const StyledHeader = styled.h1`
    font-size: 3rem;
    text-align: center;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    color: #ccc;
`

const StyledActionListContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const iconStyles = {
    color: '#caccea',
    fontSize: '8rem',
    marginTop: '2rem'
}

const LandingActionList = () => {
  return (
    <StyledActionListContainer>
      <StyledActionListHeaderWrapper>
        <StyledHeader>Create your first course</StyledHeader>
        <FontAwesomeIcon
          style={iconStyles}
          icon={faFolderOpen}
        ></FontAwesomeIcon>
      </StyledActionListHeaderWrapper>
    </StyledActionListContainer>
  );
};

export default LandingActionList;
