import React, { useState, useEffect } from "react";
import Sidebar from "../admin/Sidebar";
import Loading from "../components/Loading";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { BASE_API_URL } from "../api/request";

import { useAuth } from "../context/AuthContext";

import axios from "axios";

import styled from "styled-components";

const StyledContainer = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLessonLinkList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledLessonLinkItem = styled.li`
    font-family: 'Lato', sans-serif;
    padding: 2rem 1rem;
    background-color: ${(props) => {
      return parseInt(props.activeLessonID) === props.id ? "#e9d2c060;" : "";
    }}
    box-shadow: inset 2px 0 10px 0 rgba(0, 0, 0, 0.5);
    color: ${(props) => (props.activeLessonID === props.id ? "#fff" : "")};
`;

const Topic = ({ navHeight, activeLessonID, getNextLessonName }) => {
  const { topicID } = useParams();
  const { token } = useAuth();

  const headers = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  const url = `${BASE_API_URL}/lessons/topics/${topicID}`;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["lessons"],
    queryFn: async () => {
      return axios.get(url, headers).then((res) => {
        return res.data;
      });
    },
  });

  if (isLoading) {
    return (
      <StyledContainer>
        <Loading />
      </StyledContainer>
    );
  } else if (isError) {
    return <h1>Error!</h1>;
  } else {
    // Make sure that data exists before calling this function.
    getNextLessonName(data)
    return (
      <>
        <Sidebar navHeight={navHeight}>
          <StyledLessonLinkList>
            {data &&
              data.lessons.map((lesson) => {
                const { lesson_name, id } = lesson;
                return (
                  <StyledLessonLinkItem
                    key={id}
                    id={id}
                    activeLessonID={activeLessonID}
                  >
                    {lesson_name}
                  </StyledLessonLinkItem>
                );
              })}
          </StyledLessonLinkList>
        </Sidebar>
      </>
    );
  }
};

export default Topic;
