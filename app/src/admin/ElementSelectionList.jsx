import React, { Fragment } from "react";
import FadeIn from "../animations/FadeIn";

import styled from "styled-components";

const StyledList = styled.ul`
  position: absolute;
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid #c9c9c9;
  transition: all 0.3s ease;
  margin-left: 1rem;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.1);
  background-color: #FAFAFA;
`;

const StyledListItem = styled.li`
  padding: 1rem 2rem;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;

    &:hover {
        background-color: white;
    }
`;

const StyledElementButton = styled.button`
  border: 0;
  outline: 0;
  display: block;
  background-color: transparent;
  transition: all 0.3s ease;
  font-family: Lato, Helvetica, Sans-Serif;
  font-size: 1.1875rem;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

const StyledHR = styled.hr`
  padding: 0;
  margin: 0;
  border-top: 1px solid #ebebeb;
`;

const ElementSelectionList = (props) => {
  return (
    <StyledList>
      <FadeIn>
        {props.elements.map((element, index) => {
          return (
            <Fragment key={index}>
              <StyledListItem>
                <StyledElementButton type="button" onClick={() => props.handleElementSelection(element, 1)}>
                  {element}
                </StyledElementButton>
              </StyledListItem>
              {index < props.elements.length - 1 ? <StyledHR /> : null}
            </Fragment>
          );
        })}
      </FadeIn>
    </StyledList>
  );
};

export default ElementSelectionList;
