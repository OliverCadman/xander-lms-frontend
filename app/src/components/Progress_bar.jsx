import React from "react";
import styled from 'styled-components';
import ModuleWrapper from "./ModuleWrapper";

const StyledModuleWrapper = styled.div`
    padding-top: 0rem;
    place-items: center;
    align-items: center;
    padding-bottom: 0rem;
    margin: 0 auto;
    `
const StyledProgressWraper = styled.span`
    display:flex;
    place-items: center;
    align-items: center;
    justify-content: center;
    padding-bottom: 0rem;
    margin: 0 auto;
    `
const Progress_bar = ({bgcolor, progress, height}) => {

    
const Parentdiv = {
height: height,
width: '220%',
borderRadius: 60,
margin: 40, 
alignItems: 'centre',
justifyContent: 'centre'

}

const Childdiv = {
height: '100%',
width: `${progress}`,
backgroundColor: bgcolor,
borderRadius: 60,
alignItems: 'centre',
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
 <StyledModuleWrapper> 
     <h4> Progress Bar:</h4>
     <div style = {Parentdiv}>
        <div style = {Childdiv}>
            <StyledProgressWraper>
        <span style = {progresstext}>{`${progress}`}</span>
        </StyledProgressWraper>
        </div>
        </div>
        </StyledModuleWrapper>
)
}

export default Progress_bar;
