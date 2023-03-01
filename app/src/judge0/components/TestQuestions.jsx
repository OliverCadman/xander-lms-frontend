import React, { Component } from 'react'
import { testquestions } from '../testquestions/testquestions';

import styled from 'styled-components';

const StyledTextWrapper = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 1.25rem;
  height: 30%;
  overflow: auto;
  color: #f2f2f0;
`

class TestQuestions extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       questions : []
    }
  }

  componentWillMount(){
    // const noOfQuestions = () => {
    //   let random_question = Math.random() * testquestions.length
    // }
    this.setState({
      questions : testquestions
    },() => {
      // const noOfQuestions = testquestions.length
      //console.log(`generating random question ${noOfQuestions}`) 
      // console.log(testquestions[0])
    })
  }
  
  render() {
      const {excercise_name, excercise_description} = this.props.testQuestions[3]   
      // console.log(this.props)
    return (
      <StyledTextWrapper>
      <p>{excercise_description}</p>
      {/* <h3>{starter_code}</h3>
      <h3>{expected_output}</h3> */}
     </StyledTextWrapper>
    )
  }
}

export default TestQuestions




{/* <div className='w-full h-full bg-[#212529] rounded-md text-white font-normal text-sm overflow-y-auto'>
          <h4>{console.log(testquestions[0])}</h4>
</div> */}