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
   width: 100%;
   max-width: 1320px;
   display: grid;
   gap: 2rem;
   grid-template-columns: 1fr 1fr 1fr;
   margin: 2rem 0;

    `;

  const StyledModuleCenter = styled.div`
  display: flex;
  justify-content: center;

  
  `

const StyledHeaderWrapper = styled.header`
 padding: 3rem;
`;

const StyledHeader = styled.h2`
  padding: 1rem;
  margin: auto 0;
  font-family: DM Serif Display, sans-serif;
  color: #1C1C38;
  font-weight: 700;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  border: 1px solid black;
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
          <StyledHeaderWrapper>
            <StyledH1Wrapper>
            <StyledHeader>Modules</StyledHeader>
            </StyledH1Wrapper>
          </StyledHeaderWrapper>
          <StyledModuleCenter>
          <StyledModuleContainer>
            {data.map((module, image, Progress_bar) => {
              const { module_name, id} = module;
              return (
                <ModuleWrapper
                  theme="blue"
                  id = {id}
                  header={module_name}
                  key = {image}
                  progress={Progress_bar}
                />
              );
            })}
               </StyledModuleContainer>
               </StyledModuleCenter>
      </>
      )}
    </StyledMainContainer>
  );
};

export default Modules;
