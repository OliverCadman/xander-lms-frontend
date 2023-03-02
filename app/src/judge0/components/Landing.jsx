import React, { useEffect, useState } from "react";
import CodeEditorWindow from "./CodeEditorWindow";
import axios from "axios";
import { classnames } from "../utils/general";
import { languageOptions } from "../constants/languageOptions";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useKeyPress from "../hooks/useKeyPress";
import OutputWindow from "./OutputWindow";
import OutputDetails from "./OutputDetails";
import TestQuestions from "./TestQuestions";
import Loading from "../../components/Loading";
import { testquestions } from "../testquestions/testquestions";

import styled from "styled-components";

import { Buffer } from "buffer";


import { useQuery } from "@tanstack/react-query";
import { BASE_API_URL } from "../../api/request";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const StyledEditorContainer = styled.div`
  margin-left: 300px;
  padding: 0 1.9875rem;
  height: 100%;
`;

const StyledButtonWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;
  padding-top: 1rem;
  border-bottom: 3px solid #aaa;
`;

const StyledEditorWrapper = styled.div`
  display: flex;
  gap: 1%;
`;

const StyledExerciseOverviewWrapper = styled.div`
  flex-basis: 39%;
  background-color: #1e1e1e;
  padding: 2rem 1rem 5rem 1rem;
`;

const StyledExerciseEditorWrapper = styled.div`
  flex-basis: 59%;
`;

const StyledExerciseHeader = styled.h1`
  font-family: "DM Serif Display", "Lato", sans-serif;
`;

const javascriptDefault = ``;

const Landing = () => {
  const [exerciseData, setExerciseData] = useState({})
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [theme, setTheme] = useState("cobalt");
  const [language, setLanguage] = useState(languageOptions[0]);
  const [testQuestions, setTestQuestion] = useState(testquestions);
  const { expected_output } = testQuestions[3];
  const enterPress = useKeyPress("Enter");
  const ctrlPress = useKeyPress("Control");

  useEffect(() => {
    if (enterPress && ctrlPress) {
      handleCompile();
    }
  }, [ctrlPress, enterPress]);
  const onChange = (action, data) => {
    switch (action) {
      case "code": {
        setExerciseData({...exerciseData, starter_code: data})
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };
  const handleCompile = () => {
    setProcessing(true);
    {
      console.log(`This is the expected output ${exerciseData.expected_output}`);
    }
    const formData = {
      language_id: language.id,
      // encode source code in base64
      source_code: Buffer.from(exerciseData.starter_code).toString("base64"),
      // stdin: btoa(customInput),
      expected_output: Buffer.from(exerciseData.expected_output).toString("base64"),
    };

    const options = {
      method: "POST",
      url: "https://judge0-ce.p.rapidapi.com/submissions/",
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json"
      },
      data: formData,
    };

    console.log(formData.source_code)
    axios
      .request(options)
      .then(function (response) {
        //expected output
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;

        // get error status
        let status = err.response.status;

        if (status === 429) {
          showErrorToast(`Read Documentation`, 10000);
        }
        setProcessing(false);
      });
  };

  const checkStatus = async (token) => {
    const options = {
      method: "GET",
      url: "https://judge0-ce.p.rapidapi.com/submissions" + "/" + token,
      params: { base64_encoded: "true", fields: "*" }
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setProcessing(false);
        setOutputDetails(response.data);
                console.log(
                  "The expected output is...",
                  Buffer.from(response.data.expected_output, "base64").toString("utf-8")
                );
        if (statusId === 3) {
            showSuccessToast(`You are correct!`);
            return;
        } else if (statusId === 4) {
          showErrorToast('Incorrect answer. Try again!');
          return;
        }
        console.log("This is the response data", response.data);
        return;
      }
    } catch (err) {
      setProcessing(false);
      showErrorToast();
    }
  };

  const showSuccessToast = (msg) => {
    toast.success(msg || `Compiled Successfully!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const showErrorToast = (msg, timer) => {
    toast.error(msg || `Something went wrong! Please try again.`, {
      position: "top-right",
      autoClose: timer ? timer : 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const { exerciseID } = useParams();
  const { token } = useAuth();

  const headers = {
    headers: {
      Authorization: `Token ${token}`
    }
  }

  const url = `${BASE_API_URL}/lessons/exercises/${exerciseID}`
  const { data, isLoading, isError } = useQuery({
    queryKey: ["exercise"],
    queryFn: async () => {
      return axios.get(url, headers).then((res) => {
        return res.data;
      });
    },
  });

  useEffect(() => {
    if (data) {
      setExerciseData({
        ...exerciseData,
        starter_code: data.exercise_starter_code,
        expected_output: data.expected_output_code,
        description_text: data.exercise_textblocks
      });
    }
  }, [data])

  if (isLoading) {
    return (
      <StyledEditorContainer>
        <Loading />
      </StyledEditorContainer>
    )
  } else if (isError) {
    return <StyledEditorContainer>
      <h1>Error, sorry.</h1>
    </StyledEditorContainer>
  } else {
     return (
       <>
         <StyledEditorContainer>
           <StyledButtonWrapper>
             <StyledExerciseHeader>
               {data.exercise_name}
             </StyledExerciseHeader>
             <button
               style={{
                 boxShadow: "5px 5px 0px 0px rgba(0,0,0)",
                 ":hover": {
                   border: "2px solid #000000",
                   boxShadow: "none",
                 },
                 width: "100%",
                 maxWidth: "14rem",
                 minWidth: "12rem",
                 borderRadius: "5px",
                 color: "#000",
                 fontSize: "0.8rem",
                 lineHeight: "1.75rem",
                 backgroundColor: "#FFFFFF",
                 cursor: "pointer",
                 border: "2px solid #000000",
                 margin: "0 1rem 1rem 0",
               }}
               onClick={handleCompile}
               disabled={!exerciseData.starter_code}
               className={classnames(
                 "mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0",
                 !exerciseData.starter_code ? "opacity-50" : ""
               )}
             >
               {processing ? "Processing..." : "Compile and Execute"}
             </button>
           </StyledButtonWrapper>
           <StyledEditorWrapper>
             <StyledExerciseOverviewWrapper>
               <TestQuestions descriptionText={exerciseData.description_text} />
               <OutputWindow outputDetails={outputDetails} />
               <OutputDetails outputDetails={outputDetails} />
             </StyledExerciseOverviewWrapper>
             <StyledExerciseEditorWrapper>
               <CodeEditorWindow
                 testQuestions={testQuestions}
                 code={exerciseData.starter_code}
                 onChange={onChange}
                 language={language?.value}
                 theme={theme.value}
               />
             </StyledExerciseEditorWrapper>
           </StyledEditorWrapper>
         </StyledEditorContainer>
       </>
     );
  }
};
export default Landing;
