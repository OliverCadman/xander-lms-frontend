import React, { Component } from 'react'
import { testquestions } from '../testquestions/testquestions';

import styled from 'styled-components';

const StyledTextWrapper = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  min-height: 30%;
  overflow: auto;
  color: #f2f2f0;
  padding-bottom: 1rem;
  line-height: 30px;
`

class TestQuestions extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       questions : []
    }
  }
  
  render() {
    const descriptionText = this.props.descriptionText;
    return (
      <StyledTextWrapper>
        {descriptionText && descriptionText.map((block, index) => {
          const {text} = block;
          return (
            <p key={index}>{text}</p>
          )
        })}
     </StyledTextWrapper>
    )
  }
}

export default TestQuestions