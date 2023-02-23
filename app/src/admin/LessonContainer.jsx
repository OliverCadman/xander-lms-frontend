import React from 'react';

import styled from 'styled-components';

const StyledLessonContainer = styled.div`
    display: grid;
    grid-template-columns: 25% 1fr;
    min-height: 100%;
`

const LessonContainer = ({children, navHeight, headerHeight}) => {
  return (
   <StyledLessonContainer navHeight={navHeight} headerHeight={headerHeight}>
    {children}
   </StyledLessonContainer>
  )
}

export default LessonContainer