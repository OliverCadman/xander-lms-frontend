import React from 'react';

import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import styled from 'styled-components';

const StyledButton = styled.button`
    font-size: 2rem;
    outline: 0;
    border: 0;
    background-color: transparent;
    color: #aaa;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    margin: 1rem 0 0 1rem;
    &:hover {
        color: #999;
    }
`

const AddElementButton = ({handleClick}) => {
  return (
    <StyledButton onClick={handleClick}>
        <FontAwesomeIcon icon={faPlusCircle}/>
    </StyledButton>
  )
}

export default AddElementButton