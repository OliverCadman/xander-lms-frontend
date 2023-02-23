import React, {forwardRef} from 'react';

import styled from 'styled-components';

const StyledH1 = styled.h1`
    padding: 1rem 0 1rem 0.5rem;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    background-color: #fdfdfd;
`

const Header = forwardRef((props, ref) => {
  return (
    <StyledH1 ref={ref}>{props.content}</StyledH1>
  )
})

export default Header