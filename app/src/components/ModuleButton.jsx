import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
    background-color: transparent;
    padding: 10px 60px;
    place-items: center;
    border-radius: 50%;
    align-items: centre;
    justify-content: centre;
    cursor: pointer;
    color: white;
    box-shadow: 0px 2px 2px lightgray;
    `;

const buttonStyles = {
  background: '-webkit-linear-gradient(180deg, rgba(101,192,135,1) 0%, rgba(29,167,218,1) 100%)',
  fontSize: '10rem',
  cursor: 'pointer',
  boxShadow: '0px 2px 2px lightgray',
}

const ModuleButton = ({theme, id}) => {
  console.log(id)
  return (
    <Link to={`${id}`} theme={theme} style={buttonStyles}><span><FontAwesomeIcon icon={faPlayCircle}/></span></Link>
  )
}

export default ModuleButton