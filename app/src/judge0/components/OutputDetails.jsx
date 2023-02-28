import React from "react";

import styled from 'styled-components';

const StyledOutputDetailsWrapper = styled.div`
  min-height: 25%;
  font-family: 'DM Serif Display', sans-serif;
  color: #f2f2f0;
  border-radius: 6px;
  border: 2px solid #fafafa;
  padding: 1rem;
`

const OutputDetails = ({ outputDetails }) => {
  return (
    <StyledOutputDetailsWrapper>
    <h1>
      Test Status:
    </h1>
      <div>
      <p className="text-sm">
        Status:{" "}
        <span>
          {outputDetails?.status?.description}
        </span>
      </p>
      <p className="text-sm">
        Memory:{" "}
        <span>
          {outputDetails?.memory}
        </span>
      </p>
      <p className="text-sm">
        Time:{" "}
        <span>
          {outputDetails?.time}
        </span>
      </p>
      <p className="text-sm">
        {/* Expected Output:{" "} */}
        <span>
          {/* {outputDetails?.expected_output} */}
        </span>
      </p>
      </div>
      </StyledOutputDetailsWrapper>
  );
};

export default OutputDetails;


