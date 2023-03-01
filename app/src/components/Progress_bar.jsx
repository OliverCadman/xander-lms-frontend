import React from "react";
import styled from 'styled-components';
import ModuleWrapper from "./ModuleWrapper";

const StyledModuleWrapper = styled.div`
    display: flex;
    alignItems: 'centre';
    placeitems: 'centre';
    justifyContent: 'centre';
    textAllign: 'centre';
    padding-top: 0rem;
    width: 170%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    `

const Progress_bar = ({bgcolor, progress, height}) => {

    
const Parentdiv = {
height: height,
width: '100%',
borderRadius: 80,
margin: 10, 
alignItems: 'centre',
textAllign: 'centre',
placecontent: 'centre',
justifyContent: 'centre',
placeitems: 'centre',

}

const Childdiv = {
height: '100%',
width: `${progress}`,
backgroundColor: bgcolor,
placecontent: 'centre',
borderRadius: 80,
alignItems: 'centre',
placeitems: 'centre',
justifyContent: 'centre',
textAllign: 'centre'
}

const progresstext = {
color: 'black',
alignItems: 'centre',
fontWeight: 600,
placeitems: 'centre',
justifyContent: 'centre',
textAllign: 'centre'


}
return (
    <StyledModuleWrapper>
         <div>
         </div>
     <h4> Progress Bar:</h4>
     
     <div style = {Parentdiv}>

      
     <div style = {Childdiv}> 
     
    <span style = {progresstext}>{`${progress}`}</span>
    </div>

    </div>
    </StyledModuleWrapper>
 
    
)
}

export default Progress_bar;
