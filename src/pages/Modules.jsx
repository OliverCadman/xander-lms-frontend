import React from 'react'
import styled from "styled-components";
import Progress_bar from '../components/Progress_bar';
import ModuleWrapper from '../components/ModuleWrapper';
import DropDownMenu from '../components/DropDownMenu';

const StyledAuthContainer = styled.div`
    display: grid;
    column-gap: 60px; 
    grid-template-columns: repeat(3, 1fr);
    background-color: #e9d2c0;
    max-height: 100%;
    font-family: "Roboto", sans-serif;
    height:100%;
    padding-left: 1rem;
    `;

    const StyledHeader = styled.h1`
    font-size: 1.5rem;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    background-color: #e9d2c0;
    min-height: 100%;
    max-height: 100%;
    margin: 0 auto;
    height:100%;
  `;
  
  
  const StyledHeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: "Roboto", sans-serif;
    text-align: center;
    min-height: 100%;
    padding: 1rem 0;
    background-color: #e9d2c0;
    margin: 0 auto;
    max-height: 100%;
    height:100%;
  `;
  const StyledHeaderWrapper2 = styled.header`
  display: flex;
  align-items: center;
  padding: 2rem 0;
  background-color: #e9d2c0;
  font-family: "Roboto", sans-serif;
  min-height: 100%;
  max-height: 100%;
  margin: 0 auto;
  height:100%;
  position: relative;
`;
const StyledDropDownWrapper = styled.div`
  display: flex;
  align-items: left;
  place-items: centre;
  flex-direction: grid;
  justify-content: centre;
  text-align: left;
  margin: 10px 5px;
  background-color: #e9d2c0;
  font-family: "Roboto", sans-serif;
  margin-left: 2rem;
  position: absolute;
  top: 50%;
  `;
const StyledHeader2 = styled.h2`
  font-size: 3rem;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 2rem 0;
  background-color: #e9d2c0;
  min-height: 100%;
  max-height: 100%;
  width: 100%;
  
`;
const Modules = () => {
    const ModuleHeaderText = [
        '1. Introduction to JavaScript',
        '2. JavaScript Variables',
        '3. JavaScript Functions',
        '4. JavaScript Objects',
        '5. JavaScript Loops ',
        '6. JavaScript Events',
    ]
  
  return (
    <>     
    <StyledHeaderWrapper2>
    <StyledDropDownWrapper>
            <DropDownMenu> 
              </DropDownMenu> 
              </StyledDropDownWrapper>
     <StyledHeader2>
             Modules 
            </StyledHeader2>
            </StyledHeaderWrapper2>
            <StyledHeaderWrapper>
    <StyledHeader> 
              Select a JavaScript module and start learning today:
            </StyledHeader>
            
            </StyledHeaderWrapper>

            <StyledHeaderWrapper>

            </StyledHeaderWrapper>
            
            <StyledAuthContainer>
        {
            ModuleHeaderText.map((text, index, Progress_bar) => {
                return (
                    <ModuleWrapper theme='blue' header={text} key={index} progress = {Progress_bar}/>
       
                )
                
            })
            
        }       
        </StyledAuthContainer>   
        </>
       
  )
}



export default Modules