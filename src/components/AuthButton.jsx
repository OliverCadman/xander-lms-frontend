import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${props => props.socialMediaProvider === 'Apple' ? 'black' : props.socialMediaProvider === 'Google' ? 'white' :  '#1976D2'};
    color: ${props => props.socialMediaProvider === 'Apple' ? 'white' : props.socialMediaProvider === 'Google' ? 'black' : 'white'};
    display: flex;
    align-items: center;
    padding: 0.25rem .6rem;
`

const StyledSpan = styled.span`
    margin-right: 1rem;
`

const AuthButton = ({socialMediaProvider, SocialMediaIcon, handleClick}) => {

  return (
    <StyledButton onClick={handleClick} socialMediaProvider={socialMediaProvider}>
        <StyledSpan>
        {SocialMediaIcon}
        </StyledSpan>
        {socialMediaProvider}
    </StyledButton>
  )
}

export default AuthButton