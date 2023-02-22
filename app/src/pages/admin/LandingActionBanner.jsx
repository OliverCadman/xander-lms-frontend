import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const StyledBannerContainer = styled.header`
  margin: 0.5rem 0.875rem;
  display: flex;
  justify-content: space-between;
`;

const StyledButtonIconSpan = styled.span`
  display: inline-block;
  font-size: 1.45rem;
  line-height: 50px;
  color: white;
  height: 50px;
  text-align: center;
  margin-right: 0.2875rem;
`;

const StyledButton = styled.button`
  background-color: #3c83ef;
  border-radius: 10px;
  padding: 0 2.3rem;
  border: none;
  font-size: 1.45rem;
  font-family: 'Lato', sans-serif;
  color: #fafafa;
  cursor: pointer;
  transition: 500ms all ease-in-out;

  &:hover {
    background-color: #3c74ef;
  }
`

const LandingActionBanner = ({handleClick}) => {
  return (
    <StyledBannerContainer>
      <div></div>
      <div>
        <StyledButton onClick={handleClick}>
          <StyledButtonIconSpan>
            <FontAwesomeIcon icon={faPlus} />
          </StyledButtonIconSpan>
          Create
        </StyledButton>
      </div>
    </StyledBannerContainer>
  );
};

export default LandingActionBanner;
