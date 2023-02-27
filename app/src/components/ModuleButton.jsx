import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
    background-color: transparent;
    color: #202020;
    padding: 10px 10px;
    place-items: center;
    border-radius: 50%;
    align-items: centre;
    justify-content: centre;
    text-transform: uppercase;
    margin: 40px 50px;
    font-size: 5rem;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    border: none;
    outline: none;
    `;

const buttonStyles = {
  backgroundColor: 'transparent',
  color: '#202020',
  padding: '10px',
  fontSize: '5rem',
  cursor: 'pointer',
  boxShadow: '0px 2px 2px lightgray',
  border: 'none',
  outline: 'none'
}

const ModuleButton = ({theme, id}) => {
  console.log(id)
  return (
    <Link to={`${id}`} theme={theme} style={buttonStyles}><span><FontAwesomeIcon icon={faPlayCircle}/></span></Link>
  )
}

export default ModuleButton