import { useParams, useLocation } from "react-router-dom";
import { BASE_API_URL } from "../api/request";
import { useAuth } from "../context/AuthContext";

import Loading from "../components/Loading";
import Header from "../common/Header";
import TopicCard from "../components/TopicCard";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import styled from 'styled-components';

const StyledLoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15rem;
`;

const StyledMainSection = styled.section`
  background-color: #e9d2c0;
  min-height: 100%;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledTopicWrapper = styled.div`
  width: 100%;
  max-width: 1320px;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 2rem 0;
`

const Module = ({navHeight, headerHeight, headerRef}) => {
  const { id: moduleID } = useParams();
  const { token } = useAuth();
  const location = useLocation();

  const headers = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  const url = `${BASE_API_URL}/lessons/modules/${moduleID}`;
  const {data, isLoading, isError} = useQuery({
    queryKey:['modules'],
    queryFn: async () => {
      return axios.get(url, headers).then(res => {
        return res.data;
      })
    }
  });


  return (
    <>
      <StyledMainSection navHeight={navHeight}>
        {isLoading ? (
          <StyledLoadingWrapper>
            <Loading />
          </StyledLoadingWrapper>
        ) : isError ? (
          <h1>Error</h1>
        ) : (
          <>
          <Header
              content={data.module_name}
              ref={headerRef}
              fontFamily="DM Serif Display"
              color="#1c1c38"
            />
            <StyledContainer>
              <StyledTopicWrapper>
                {data.topics &&
                  data.topics.map((topic) => {
                    const { id, topic_name, lessons } = topic;
                    return (
                      <TopicCard
                        key={id}
                        id={id}
                        moduleID={moduleID}
                        topicName={topic_name}
                        lessons={lessons}
                      />
                    );
                  })}
              </StyledTopicWrapper>
            </StyledContainer>
          </>
        )}
      </StyledMainSection>
    </>
  );
};

export default Module;
