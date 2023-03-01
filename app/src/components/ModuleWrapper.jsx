import React from 'react';
import Progress_bar from './Progress_bar';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledModuleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 6rem;
  font-weight: 500;
  padding-top: 0.5rem;
  padding-bottom: 0.9rem;
  border: 2px solid black;
  margin: 1.5rem 0;
`
const StyledNormalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center
  text-align: center;
  padding: 1rem;
  font-weight: 500;
  padding-top: 0rem;
  padding-bottom: 0.2rem;
  margin: 0 auto;
`

const ModuleWrapper = ({header, theme, image, id}) => {
  console.log(id)
  return (
    
    <StyledModuleWrapper>
   
        <h3>{header}</h3>
        <StyledNormalWrapper> </StyledNormalWrapper>
        <Link to={`${id}`}>
          <img src="../../src/assets/play-button.png"
                    alt="Modules Page Icon"
                    width="200"
                    height="180">{image}</img> 
                    </Link>
                    
        <Progress_bar bgcolor = "#D9D9D9" progress = 'Not Started' height = {20}/>
    </StyledModuleWrapper>
  )
}

export default ModuleWrapper

