import React, { useRef, useEffect } from "react";
import FadeIn from "../../../animations/FadeIn";

import styled from "styled-components";

const StyledModalOverlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease;
`;

const StyledModal = styled.aside`
  min-width: 40vw;
  max-width: 850px;
  background-color: #fafafa;
  padding: 2rem 1.2875rem;
`;

const StyledModalDialog = styled.div`
  padding: 0.2rem 0.45rem;
`;

const StyledModalHeader = styled.header`
  font-family: "Lato", sans-serif;
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
`;

const StyledCloseTimesButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  font-size: 2rem;
  cursor: pointer;
`;

const StyledModalForm = styled.form`
  margin-top: 0.875rem;
  font-family: "Lato", sans-serif;
  font-size: 1.15rem;
`;

const StyledFormInput = styled.input`
  width: 100%;
  border-radius: 10px;
  height: 2.75rem;
  border: 1px solid #aaa;
  margin-top: 0.325rem;
  padding: 0 0.25rem;
  font-size: 1.25rem;
`;

const StyledSubmitButton = styled.button`
    border: unset;
    outline: unset;
    background-color: #5bc85c;
    padding: 0.6875rem 2rem;
    border-radius: 7px;
    color: #fafafa;
    font-weight: 300;
    font-size: 1.5rem;
    margin-top: .5rem;
`

const Modal = ({ showModal, handleClick, handleModalSubmit, inputRef }) => {
  return (
    <StyledModalOverlay showModal={showModal}>
      <FadeIn>
        <StyledModal>
          <StyledModalDialog>
            <StyledModalHeader>
              <h2>Create your Course</h2>
              <StyledCloseTimesButton
                type="button"
                aria-label="close"
                onClick={handleClick}
              >
                &#x2715;
              </StyledCloseTimesButton>
            </StyledModalHeader>
            <StyledModalForm onSubmit={(e) => handleModalSubmit(e)}>
              <div>
                <label htmlFor="course-name">Enter your course name:</label>
                <StyledFormInput type="text" ref={inputRef}/>
              </div>
              <StyledSubmitButton type='submit'>Get Started</StyledSubmitButton>
            </StyledModalForm>
          </StyledModalDialog>
        </StyledModal>
      </FadeIn>
    </StyledModalOverlay>
  );
};

export default Modal;
