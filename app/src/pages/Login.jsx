import React, {useState, createRef, useEffect} from "react";
import Banner from "../components/Banner";

import styled from "styled-components";

const StyledAuthContainer = styled.div`
  min-height: ${props => `calc(100vh - ${props.bannerHeight}px)`};
  background-color: #E9D2C0;
  display: grid;
  place-items: center;

`

const StyledAuthWrapper = styled.div`
  width: 100%;
  max-width: 800px;
`
const StyledHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 1rem 0;
`

const StyledXanderIcon = styled.img`
  border-radius: 50%;
  width: 10%;
  height: 10%;
  margin-bottom: 1.25rem;
`

const StyledHeader = styled.h1`
  font-size: 1.5rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
`

const Login = () => {
  const [bannerHeight, setBannerHeight] = useState(null);
  const bannerRef = createRef();

  useEffect(() => {
    const bannerRect = bannerRef.current.getBoundingClientRect();
    setBannerHeight(bannerRect.height);
  }, [])

  return (
    <>
      <Banner ref={bannerRef} />
      <StyledAuthContainer bannerHeight={bannerHeight}>
        <StyledAuthWrapper>
          <StyledHeaderWrapper>
            <StyledXanderIcon src="../../src/assets/xander_logo_icon.png" alt="Xander Company Logo" width='200' height='200' />
            <StyledHeader>Login to access course modules, assignments and tutor guidance</StyledHeader>
          </StyledHeaderWrapper>
        </StyledAuthWrapper>
      </StyledAuthContainer>
    </>
  );
};

export default Login;