import React, {forwardRef} from 'react';

import styled from 'styled-components';

const StyledH1Wrapper = styled.h1`
  padding: 3rem;
`

const StyledH1 = styled.h1`
    padding: 1rem;
    margin: auto 0;
    font-family: ${props => `${props.fontFamily}, sans-serif`};
    color: ${props => props.color};
    font-weight: 700;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    border: 1px solid black;
`

const Header = forwardRef((props, ref) => {
  return (
    <StyledH1Wrapper>
    <StyledH1 ref={ref} fontFamily={props.fontFamily} color={props.color}>{props.content}</StyledH1>
    </StyledH1Wrapper>
  )
})

export default Header