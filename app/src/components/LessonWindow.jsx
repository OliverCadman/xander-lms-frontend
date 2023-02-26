import React from 'react';
import styled from 'styled-components';

const StyledLessonContainer = styled.section`
    height: 100%;
    position: relative;
    margin-left: 300px;
    padding: 2rem 5rem;
`

const LessonWindow = ({children}) => {
  return (
    <StyledLessonContainer>
    {children}
    </StyledLessonContainer>
  )
}

export default LessonWindow