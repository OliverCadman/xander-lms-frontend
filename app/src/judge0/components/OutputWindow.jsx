import React from "react";

import { Buffer } from "buffer";

import styled from "styled-components";

const StyledOutputWindowWrapper = styled.div`
  min-height: 20%;
  font-family: "DM Serif Display", sans-serif;
  color: #f2f2f0;
  border: 2px solid #fafafa;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: .5rem;
`;

const OutputWindow = ({ outputDetails }) => {
  const getOutput = () => {
    console.log(
      `This is output details${Buffer.from(
        outputDetails.stdout,
        "base64"
      ).toString("utf-8")}`
    );
    let statusId = outputDetails?.status?.id;

    if (statusId === 6) {
      // compilation error
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {Buffer.from(outputDetails?.compile_output, "base64").toString(
            "utf-8"
          )}
        </pre>
      );
    } else if (statusId === 3) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-green-500">
          {Buffer.from(outputDetails.stdout, "base64").toString("utf-8") !==
          null
            ? `${Buffer.from(outputDetails.stdout, "base64").toString("utf-8")}`
            : null}
        </pre>
      );
    } else if (statusId === 5) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {`Time Limit Exceeded`}
        </pre>
      );
    } else if (statusId === 4) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {Buffer.from(outputDetails.stdout, "base64").toString("utf-8")}
        </pre>
      );
    }
  };
  return (
    <StyledOutputWindowWrapper>
      <h1 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-2">
        Output:
      </h1>
      <div className="w-full h-full bg-[#212529] rounded-md text-white font-normal text-sm overflow-y-auto">
        {outputDetails ? <>{getOutput()}</> : null}
      </div>
    </StyledOutputWindowWrapper>
  );
};

export default OutputWindow;
