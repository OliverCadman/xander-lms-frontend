import React from 'react';
import ModuleButton from './ModuleButton';
import Progress_bar from './Progress_bar';

import styled from 'styled-components';

const StyledModuleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  border: 2px solid black;
  margin: 1.5rem 0;
`
const ModuleWrapper = ({header, theme, id}) => {
  return (

    <StyledModuleWrapper>
        <h4>{header}</h4>
        <ModuleButton id={id} theme={theme}></ModuleButton>
        <Progress_bar bgcolor = "#D9D9D9" progress = 'Not Started' height = {20}/>
    </StyledModuleWrapper>
  )
}

export default ModuleWrapper

