import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Progress_bar from "../components/Progress_bar";
import ModuleWrapper from "../components/ModuleWrapper";
import DropDownMenu from "../components/DropDownMenu";
import Loading from "../components/Loading";

import { useQuery } from "@tanstack/react-query";
import { BASE_API_URL } from "../api/request";

import axios from "axios";

const StyledLoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15rem;
`;

const StyledMainContainer = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.navHeight}px)`};
  background-color: #e9d2c0;
`;

const StyledModuleContainer = styled.div`
    display: grid;
    column-gap: 60px; 
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: 1fr;
    font-weight: 500;
    place-items: center;
    align-items: center;
    font-family: "Roboto", sans-serif;
    border-top: 1px solid black;
    border-bottom: 2px solid black;
    padding-left: 2rem;
    box-sizing: border-box;
    border-radius: 1.5px;
    `;

const StyledHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  background-color: #e9d2c0;
  font-family: "Roboto", sans-serif;
  margin: 0 auto;
  position: relative;
  border: 1px solid black;
  box-sizing: border-box;
  border-radius: 1.5px;
  height: 100%;
  position: relative;
`;

const StyledHeader = styled.h2`
  font-size: 2.5rem;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  padding: 1.2rem;
  background-color: #e9d2c0;
  width: 100%;
  flex: 1;
  text-align: center;
`;

const StyledH1Wrapper = styled.div`
  flex: 1;
`

const Modules = ({ navHeight }) => {
  const url = `${BASE_API_URL}/lessons/modules`;
  const headers = {
    headers: {
      Authorization: "Token 33a377f55fa5e5540a5f6dd7242445bfa95e96bf",
    },
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['modules_list'],
    queryFn: async () => {
      return axios.get(url, headers).then((res) => {
        return res.data
      })
    }
  })

  return (
    <StyledMainContainer navHeight={navHeight}>
      {isLoading ? (
        <StyledLoadingWrapper>
          <Loading />
        </StyledLoadingWrapper>
      ) : isError ? (
        <h1>Error....</h1>
      ) : (
        <>
          <StyledHeaderWrapper>
            <StyledH1Wrapper>
            <StyledHeader>Modules</StyledHeader>
            </StyledH1Wrapper>
          </StyledHeaderWrapper>
          <StyledModuleContainer>
            {data.map((module, index, Progress_bar) => {
              const { module_name, id } = module;
              return (
               
                <ModuleWrapper
                  theme="blue"
                  id={id}
                  header={module_name}
                  key={index}
                  progress={Progress_bar}
                />
              );
            })}
          </StyledModuleContainer>
        </>
      )}
    </StyledMainContainer>
  );
};

export default Modules;
