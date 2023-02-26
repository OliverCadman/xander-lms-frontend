import React, {forwardRef} from 'react';

import styled from 'styled-components';

const StyledH1 = styled.h1`
    padding: 1rem 0 1rem 0.5rem;
    font-family: ${props => `${props.fontFamily}, sans-serif`};
    color: ${props => props.color};
    font-weight: 700;
    font-size: 3rem;
`

const Header = forwardRef((props, ref) => {
  return (
    <StyledH1 ref={ref} fontFamily={props.fontFamily} color={props.color}>{props.content}</StyledH1>
  )
})

export default Header