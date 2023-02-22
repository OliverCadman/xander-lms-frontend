import React, { useState, createRef, useEffect, useContext } from "react";
import Banner from "../components/Banner";
import AuthButton from "../components/AuthButton";
import AuthForm from "../components/AuthForm";

import AppleLogo from "../assets/AppleLogo";
import FacebookLogo from "../assets/FacebookLogo";
import GoogleLogo from "../assets/GoogleLogo";

import styled from "styled-components";

import { useAuth } from "../context/AuthContext";

import { useLocation } from "react-router-dom";


const StyledAuthContainer = styled.div`
  min-height: ${(props) => `calc(100vh - ${props.bannerHeight}px)`};
  background-color: #e9d2c0;
  display: grid;
  place-items: center;
`;

const StyledAuthWrapper = styled.div`
  width: 100%;
  max-width: 800px;
`;

const StyledHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 1rem 0;
`;

const StyledXanderIcon = styled.img`
  border-radius: 50%;
  width: 10%;
  height: 10%;
  margin-bottom: 1.25rem;
`;

const StyledHeader = styled.h1`
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
`;

const StyledFormContainer = styled.div`
  display: grid;
  width: 100%;
  column-gap: 2.5rem;
  grid-template-columns: 1fr 2px 1fr;
  padding: 1rem 0;
`;

const StyledFormWrapper = styled.div`
  width: 100%;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
`

const StyledSocialAuthWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledPara = styled.p`
  font-size: 1.5rem;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  text-shadow: -0.5px -0.5px #000000;
  padding-bottom: 1.5rem;
`
const StyledLine = styled.div`
  border-right: 0.5px solid black;
`

const Login = () => {
  const [bannerHeight, setBannerHeight] = useState(null);
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: ''
  })
  const bannerRef = createRef();

  // Get Auth Context
  const {login} = useAuth();

  const location = useLocation();
  console.log(location.state)

  const handleInput = (e, field) => {
    setUserDetails({...userDetails, [field]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userDetails);
  }

  useEffect(() => {
    const bannerRect = bannerRef.current.getBoundingClientRect();
    setBannerHeight(bannerRect.height);
  }, []);

  return (
    <>
      <Banner ref={bannerRef} />
      <StyledAuthContainer bannerHeight={bannerHeight}>
        <StyledAuthWrapper>
          <StyledHeaderWrapper>
            <StyledXanderIcon
              src="../../src/assets/xander_logo_icon.png"
              alt="Xander Company Logo"
              width="200"
              height="200"
            />
            <StyledHeader>
              Login to access course modules, assignments and tutor guidance
            </StyledHeader>
            <StyledFormContainer>
              <StyledFormWrapper>
                <StyledPara>Login</StyledPara>
                <StyledSocialAuthWrapper>
                  <AuthButton socialMediaProvider={'Apple'} SocialMediaIcon={<AppleLogo />} />
                  <AuthButton socialMediaProvider={'Google'} SocialMediaIcon={<GoogleLogo />} />
                  <AuthButton socialMediaProvider={'Login'} SocialMediaIcon={<FacebookLogo />} />
                </StyledSocialAuthWrapper>
                <AuthForm handleInput={handleInput} handleSubmit={handleSubmit}/>
              </StyledFormWrapper>
              <StyledLine></StyledLine>
              <StyledFormWrapper>
                <StyledPara>Signup</StyledPara>
              <StyledSocialAuthWrapper>
                <AuthButton socialMediaProvider={'Apple'} SocialMediaIcon={<AppleLogo />} />
                <AuthButton socialMediaProvider={'Google'} SocialMediaIcon={<GoogleLogo />} />
                <AuthButton socialMediaProvider={'Login'} SocialMediaIcon={<FacebookLogo />} />
              </StyledSocialAuthWrapper>
              <AuthForm isSignUp={true} />
              </StyledFormWrapper>
            </StyledFormContainer>
          </StyledHeaderWrapper>
        </StyledAuthWrapper>
      </StyledAuthContainer>
    </>
  );
};

export default Login;
