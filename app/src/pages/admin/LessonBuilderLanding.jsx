import React, {useState, useRef} from 'react';

import styled from 'styled-components';
import LandingActionBanner from './LandingActionBanner';
import LandingActionList from './LandingActionList';
import Modal from './components/Modal';

import { BASE_API_URL } from '../../api/request';
import { post } from '../../api/request';
import { useAuth } from '../../context/AuthContext';
import useFetch from '../../hooks/useFetch';

const StyledParentContainer = styled.section`
  background-color: #faeac9;
  height: ${(props) =>
    `calc(100% - ${props.navHeight + props.headerHeight}px)`};
`;

const StyledGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    padding: .875rem;
    column-gap: .35rem;
    min-height: 100%;
`

const StyledGridSideBar = styled.aside`
    grid-column: 1 / 2;
    grid-row: 1 / 3;

`

const StyledGridMain = styled.div`
  grid-column: 2 / 5;
  grid-row: 1 / 3;
  background-color: #fff;
  box-shadow: -10px 20px 35px rgba(0, 0, 0, 0.2);
  webkit-box-shadow: -10px 20px 35px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;


const LessonBuilderLanding = ({navHeight, headerHeight}) => {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState();

  const { token } = useAuth();

  const headers = {
    headers: {
      Authorization: `Token ${token}`
    }
  };

  const ENDPOINT = "lessons/languages/";
  const url = `${BASE_API_URL}/${ENDPOINT}`
  const { data } = useFetch(url, headers, success);
  console.log(data);

  const inputRef = useRef();

  const handleClick = () => {
    // Toggle modal window.
    setShowModal(!showModal);
  }

  const handleModalSubmit = async (e) => {
    e.preventDefault();

    setSuccess(null);
    const input = inputRef.current.value;
    if (!input) {
      setError({
        'type': 'validation',
        'msg': 'Please enter a course name.'
      })
    } 
    console.log(token);

    console.log(headers)

    const payload = {
      language_name: input
    }

    const res = await post(ENDPOINT, payload, headers);
    
    if (res) {
      setSuccess(true);
    } else {
      console.log('Request failed.')
    }

  }

  return (
    <>
      <StyledParentContainer navHeight={navHeight} headerHeight={headerHeight}>
        <StyledGridContainer>
          <StyledGridSideBar></StyledGridSideBar>
          <StyledGridMain>
            <LandingActionBanner
              handleClick={handleClick}
            />
            <LandingActionList></LandingActionList>
          </StyledGridMain>
        </StyledGridContainer>
      </StyledParentContainer>
      {showModal ? <Modal 
      showModal={showModal} 
      handleClick={handleClick}
      handleModalSubmit={handleModalSubmit}
      inputRef={inputRef}
      /> : ''}
    </>
  );
}

export default LessonBuilderLanding