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
  height: ${(props) => `calc(100vh - ${props.navHeight}px)`};
  background-color: #e9d2c0;
`;

const StyledModuleContainer = styled.div`
    display: grid;
    column-gap: 60px; 
    grid-template-columns: repeat(auto-fill, 300px);
    grid-template-rows: 1fr;
    font-family: "Roboto", sans-serif;
    padding-left: 1rem;
    `;

const StyledHeader = styled.h1`
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  background-color: #e9d2c0;
  margin: 0 auto;
`;

const StyledHeaderWrapper = styled.header`
  font-family: "Roboto", sans-serif;
  text-align: center;
  padding: 1rem 0;
  background-color: #e9d2c0;
  margin: 0 auto;
`;
const StyledHeaderWrapper2 = styled.header`
  display: flex;
  align-items: center;
  padding: 2rem 0;
  background-color: #e9d2c0;
  font-family: "Roboto", sans-serif;
  margin: 0 auto;
  position: relative;
`;
const StyledDropDownWrapper = styled.div`
  display: flex;
  align-items: left;
  place-items: centre;
  flex-direction: grid;
  justify-content: centre;
  text-align: left;
  margin: 10px 5px;
  background-color: #e9d2c0;
  font-family: "Roboto", sans-serif;
  margin-left: 2rem;
  position: absolute;
  top: 50%;
`;
const StyledHeader2 = styled.h2`
  font-size: 3rem;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 2rem 0;
  background-color: #e9d2c0;
  width: 100%;
`;
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
          <StyledHeaderWrapper2>
            <StyledDropDownWrapper>
              <DropDownMenu></DropDownMenu>
            </StyledDropDownWrapper>
            <StyledHeader2>Modules</StyledHeader2>
          </StyledHeaderWrapper2>
          <StyledHeaderWrapper>
            <StyledHeader>
              Select a JavaScript module and start learning today:
            </StyledHeader>
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
