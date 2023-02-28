import React from "react";
const Progress_bar = ({bgcolor, progress, height}) => {

const Parentdiv = {
height: height,
width: '100%',
borderRadius: 40,
margin: 40, 
alignItems: 'centre',
justifyContent: 'centre'

}

const Childdiv = {
height: '100%',
width: `${progress}`,
backgroundColor: bgcolor,
borderRadius: 40,
alignItems: 'centre',
textAllign: 'centre'
}

const progresstext = {
color: 'black',
alignItems: 'centre',
placeitems: 'centre',
fontWeight: 500,
textAllign: 'centre'

}
return (

    <div style = {Parentdiv}>
     <h5> Progress Bar:</h5>
        <div style = {Childdiv}>
        <span style = {progresstext}>{`${progress}`}</span>
    </div>
    </div> 
)

}

export default Progress_bar;
