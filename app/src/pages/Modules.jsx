import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Progress_bar from "../components/Progress_bar";
import ModuleWrapper from "../components/ModuleWrapper";
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
    padding: 6rem;
    padding-top: 0rem;
    padding-bottom: 0.2rem;
    padding-left: 0rem;
    grid-template-rows: 1fr;
    font-weight: 300;
    font-size: 300;
    place-items: center;
    align-items: center;
    font-family: "Roboto", sans-serif;
    border-top: 1px solid black;
    border-bottom: 2px solid black;
    box-sizing: border-box;
    border-radius: 2px;
    min-width: fit-content;
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
  min-width: fit-content;
  height: 100%;
  position: relative;
`;

const StyledBorderWrapper = styled.header`
  display: flex;
  align-items: center;
  background-color: #e9d2c0;
  font-family: "Roboto", sans-serif;
  margin: 0 auto;
  border-top: 1px solid black;
  box-sizing: border-box;
  border-radius: 1.5px;
`;

const StyledHeader = styled.h2`
  font-size: 2.0rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  background-color: #e9d2c0;
  width: 100%;
  flex: 1;
  text-align: center;
`;

const StyledModulesImage = styled.img`
  height: 110% !important;
`;

const StyledH1Wrapper = styled.div`
  flex: 1;
`
;

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
        <br></br>
        <br></br>
        <br></br>
        <StyledBorderWrapper></StyledBorderWrapper>
          <StyledHeaderWrapper>
            <StyledH1Wrapper>
            <StyledHeader>Modules</StyledHeader>
            </StyledH1Wrapper>
          </StyledHeaderWrapper>
          <StyledModuleContainer>
            {data.map((module, image, Progress_bar) => {
              const { module_name} = module;
              return (
                <ModuleWrapper
                  theme="blue"
                  header={module_name}
                  key = {image}
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
