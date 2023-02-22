import React from "react";
const Progress_bar = ({bgcolor, progress, height}) => {

const Parentdiv = {
height: height,
width: '60%',
borderRadius: 20,
margin: 40, 
alignItems: 'centre',
justifyContent: 'centre'

}

const Childdiv = {
    height: '100%',
    width: `${progress}`,
    backgroundColor: bgcolor,
    borderRadius: 20,
    alignItems: 'centre',
    textAllign: 'centre'
}

const progresstext = {
    padding: 40,
    color: '#E30b5d',
    alignItems: 'centre',
    fontWeight: 900,
    textAllign: 'centre'
}
return (

    <div style = {Parentdiv}>
        <div style = {Childdiv}>
        <span style = {progresstext}>{`${progress}`}</span>
    </div>
    </div> 
)

}

export default Progress_bar;
