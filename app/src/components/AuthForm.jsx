import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    text-align: left;
`

const StyledInputWrapper = styled.div `
    margin: 2rem 0;
`

const StyledLabel = styled.label`
    font-family: 'Lato', san-serif;
    font-weight: 300;
`

const StyledInput = styled.input`
    display: block;
    width: 100%;
    padding: 0.35rem 0;
    font-family: 'Lato', sans-serif;
`

const StyledButton = styled.button`
    outline: none;
    border: none;
    border-radius: 5px;
    font-family: 'Lato', sans-serif;
    color: #fafafa;
    font-size: 1.2875rem;
    padding: .65rem 0;
    width: 100%;
    background-color: #00A878;
    transition: background-color 0.15s ease-in-out;
    cursor: pointer;

    &:hover {
    background-color: #034F39;
    }
`


const AuthForm = ({isSignUp, handleInput, handleSubmit}) => {
  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      {/* * Email Address */}
      {isSignUp ? (
        <StyledInputWrapper>
          <StyledLabel htmlFor="username">Your Username:</StyledLabel>
          <StyledInput type="text" />
        </StyledInputWrapper>
      ) : null}
      <StyledInputWrapper>
        <StyledLabel htmlFor="email">Your Email:</StyledLabel>
        <StyledInput type="email" onChange={(e) => handleInput(e, "email")} />
      </StyledInputWrapper>
      {/* * Password */}
      <StyledInputWrapper>
        <StyledLabel htmlFor="password">Your Password:</StyledLabel>
        <StyledInput type="password" onChange={(e) => handleInput(e, "password")} />
      </StyledInputWrapper>
      <StyledButton>Submit</StyledButton>
    </StyledForm>
  );
}

export default AuthForm