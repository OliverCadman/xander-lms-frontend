import React from 'react';

import styled from 'styled-components';

const StyledWrapper = styled.div`
    height: initial;
    box-shadow: -10px 20px 35px rgba(0, 0, 0, 0.2);

`

const LessonWrapper = ({children}) => {
  return (
    <StyledWrapper>
        {children}
    </StyledWrapper>
  )
}

export default LessonWrapper