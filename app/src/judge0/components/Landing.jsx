
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from "react";
import CodeEditorWindow from "./CodeEditorWindow";
import axios from "axios";
import { classnames } from "../utils/general";
import { languageOptions } from "../constants/languageOptions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { defineTheme } from "../lib/defineTheme";
import useKeyPress from "../hooks/useKeyPress";
import OutputWindow from "./OutputWindow";
// import CustomInput from "./CustomInput";
import OutputDetails from "./OutputDetails";
import ThemeDropdown from "./ThemeDropdown";
import LanguagesDropdown from "./LanguagesDropdown";
import TestQuestions from './TestQuestions';
import { testquestions } from '../testquestions/testquestions';
// import TestCaseStatus from './TestCaseStatus';
// import styled from 'styled-components';

const javascriptDefault = ``;

const Landing = () => {
  const [code, setCode] = useState(javascriptDefault);
  // const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [theme, setTheme] = useState("cobalt");
  const [language, setLanguage] = useState(languageOptions[0]);
  const [testQuestions, setTestQuestion] = useState(testquestions);
  const {expected_output} = testQuestions[0]
  const enterPress = useKeyPress("Enter");
  const ctrlPress = useKeyPress("Control");

  const onSelectChange = (sl) => {
    console.log("selected Option...", sl);
    setLanguage(sl);
  };

  useEffect(() => {
    if (enterPress && ctrlPress) {
      console.log("enterPress", enterPress);
      console.log("ctrlPress", ctrlPress);
      handleCompile();
    }
  }, [ctrlPress, enterPress]);
  const onChange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };
  const handleCompile = () => {
    setProcessing(true);
    {console.log(`This is the expected output ${expected_output}`)}
    const formData = {
      language_id: language.id,
      // encode source code in base64
      source_code: btoa(code),
      // stdin: btoa(customInput),
      expected_output : btoa(expected_output)

    };

    

    const options = {
      method: "POST",
      url: 'https://judge0-ce.p.rapidapi.com/submissions/',
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
      },
      data: formData,
    };
    axios
      .request(options)
      .then(function (response) {
        //expected output
        const token = response.data.token;
        console.log(token);
        checkStatus(token);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        console.log(err.response.status);
        // get error status
        let status = err.response.status;
        console.log("status", status);
        if (status === 429) {
          console.log("too many requests", status);

          showErrorToast(
            `Read Documentation`,
            10000
          );
        }
        setProcessing(false);
        console.log("catch block...", error);
      });
  };

  const checkStatus = async (token) => {
    const options = {
      method: "GET",
      url: 'https://judge0-ce.p.rapidapi.com/submissions' + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
      },
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
        showSuccessToast(`Compiled Successfully!`);
        console.log("This is the response data", response.data);
        return;
      }
    } catch (err) {
      console.log("err", err);
      setProcessing(false);
      showErrorToast();
    }
  };

  function handleThemeChange(th) {
    const theme = th;
    console.log("theme...", theme);

    if (["light", "vs-dark"].includes(theme.value)) {
      setTheme(theme);
    } else {
      defineTheme(theme.value).then((_) => setTheme(theme));
    }
  }
  useEffect(() => {
    defineTheme("oceanic-next").then((_) =>
      setTheme({ value: "oceanic-next", label: "Oceanic Next" })
    );
  }, []);

  const showSuccessToast = (msg) => {
    toast.success(msg || `Compiled Successfully!`, {
      position: "top-right",
      autoClose: 1000,
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
      autoClose: timer ? timer : 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>     
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="" src="{xandericon}" width="30" height="30" className="d-inline-block align-top" />
            Xander IDE
          </Navbar.Brand>
          <Navbar.Brand href="#">
            Programming languages
          </Navbar.Brand>
          <Navbar.Brand href="#">
          <LanguagesDropdown onSelectChange={onSelectChange} />
          </Navbar.Brand>
          <Navbar.Brand href="#">
            IDE Theme
          </Navbar.Brand>
          <Navbar.Brand href="#">
          <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
          </Navbar.Brand>       
          <Navbar.Brand href="#">
          <Button variant="secondary">logout</Button>{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br/>
      <Row>
      <Col sm={4}><TestQuestions testQuestions={testQuestions}/></Col>
      {/* {console.log(`The values ${testquestions}`)} */}
      <Col sm={8}><CodeEditorWindow testQuestions={testQuestions} code={code} onChange={onChange} language={language?.value} theme={theme.value}/></Col>
      </Row>

      <Row>
      <Col sm={6}>  <OutputWindow outputDetails={outputDetails} /></Col>
      <Col sm={4}>
        <OutputDetails outputDetails={outputDetails} />
      </Col>
      <Col sm={2}>
        <br/>
        <br/>
      <button
              onClick={handleCompile}
              disabled={!code}
              className={classnames(
                "mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0",
                !code ? "opacity-50" : ""
              )}
            >
              {processing ? "Processing..." : "Compile and Execute"}
            </button>
      </Col>
      </Row>
    </>
  )
};
export default Landing;


{/*

    
      <button
              onClick={handleCompile}
              disabled={!code}
              className={classnames(
                "mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0",
                !code ? "opacity-50" : ""
              )}
            >
              {processing ? "Processing..." : "Compile and Execute"}
            </button>

*/}