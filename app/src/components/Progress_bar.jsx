import React from "react";
import styled from 'styled-components';
import ModuleWrapper from "./ModuleWrapper";

const StyledModuleWrapper = styled.div`
    display: flex;
    alignItems: 'centre';
    placeitems: 'centre';
    justifyContent: 'centre';
    textAllign: 'centre';
    `

const Progress_bar = ({bgcolor, progress, height}) => {

    
const Parentdiv = {
height: height,
width: '100%',
borderRadius: 80,
margin: 40, 
alignItems: 'centre',
justifyContent: 'centre',
placeitems: 'centre'

}

const Childdiv = {
height: '120%',
width: `${progress}`,
backgroundColor: bgcolor,
borderRadius: 80,
alignItems: 'centre',
placeitems: 'centre',
justifyContent: 'centre',
textAllign: 'centre'
}

const progresstext = {
color: 'black',
alignItems: 'centre',
placeitems: 'centre',
fontWeight: 600,
textAllign: 'centre'


}
return (
    <div> <br></br>
     <h4> Progress Bar:</h4>
     <StyledModuleWrapper>
     <div style = {Parentdiv}>
     <div style = {Childdiv}> 
    <span style = {progresstext}>{`${progress}`}</span>
    </div>
   
    </div>
    </StyledModuleWrapper>
    </div>
    
)
}

export default Progress_bar;
