import React from "react";
import { XanderLogo as Logo } from "../assets/xander_logo.svg";

import styled from "styled-components";

const StyledBannerWrapper = styled.header`
  display: flex;
  justify-content: center;
  background-color: ;
`;

const Banner = () => {
  return (
    <StyledBannerWrapper>
      <Logo />
    </StyledBannerWrapper>
  );
};

export default Banner;
