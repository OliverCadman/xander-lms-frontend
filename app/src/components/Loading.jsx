import React from 'react';
import '../assets/css/Loading.css'

import styled from 'styled-components';

const StyledSVG = styled.svg`
  width: 30%;
`;

const Loading = () => {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 503.9 183.8"
      xmlSpace="preserve"
      stroke="#222"
    >
      <g>
        <g>
          <path
            id="path-1"
            d="M91.4,119.1l17.4-22.9c1.5-2,2.4-3.9,2.7-5.6c0.3-1.7-0.9-2.8-3.6-3.4l-3.5-0.7V85h24.4v1.5l-4.6,1.2    c-2.2,0.5-4,1.3-5.2,2.4s-2.5,2.5-3.8,4.2l-21.5,28L91.4,119.1z"
          />
          <path
            id="path-2"
            d="M88,181.6h49v-1.4l-3.3-1.2c-2.1-0.8-3.8-1.6-4.9-2.6c-1.2-0.9-2.4-2.3-3.7-4L91.7,125l0,0l-2.3-3.2    L71.3,96.1c-1.4-2.1-2-3.8-1.8-5.3s1.6-2.6,4.1-3.3l4-1v-1.4H30.7v1.4l2.8,1c2.2,0.8,3.8,1.7,4.6,2.6s1.8,2.2,3,3.9l30.8,43.7l0,0    l-27.1,34.8c-1.4,1.8-2.8,3.2-4.2,4.3s-3.4,2-5.8,2.7l-2.9,0.7v1.4h23.6v-1.4l-2.4-0.6c-2.2-0.5-3.5-1.5-3.8-3.1s0.3-3.4,1.9-5.3    L74,140.9v0.1l21,29.7c1.5,2.1,2.1,3.9,1.8,5.5c-0.4,1.6-2,2.7-4.8,3.3l-4,0.9V181.6z"
          />
        </g>
        <g>
          <path
            id="path-3"
            d="M172.4,109.2c8.6,0,15.4,2.1,20,6.3c4.7,4.2,7.1,11.1,7.1,20.6v32.3c0,4.5,2.1,6.7,6.3,6.7h3.2l1.2,1.1    c-1.8,2.3-3.8,4.1-6,5.3c-2.2,1.3-5.3,1.9-9.2,1.9c-4.2,0-7.6-1-10.1-3s-4.1-4.6-4.9-7.9l-0.1-0.2l-0.2,0.2c-2.9,3.1-5.9,5.8-9,8    c-3,2.2-7,3.3-11.9,3.3c-5.6,0-10.4-1.6-14.2-4.8s-5.7-7.8-5.7-13.8c0-4.5,2.3-8.8,7-12.6c4.6-3.8,12.1-6.7,22-8.7    c1.4-0.3,3.1-0.6,5.3-1c0.8-0.1,1.7-0.3,2.5-0.4c0,0.5,0,2.2,0,2.7h-0.3c-0.7,0.1-1.5,0.3-2.4,0.5c-4.5,1.2-8.1,3.2-10.8,6    s-4.1,6.6-4.1,11.3c0,4,0.9,7.1,2.8,9.1c1.9,2,4.2,3,6.8,3c2,0,3.8-0.5,5.5-1.4s3.8-2.4,6.1-4.3l0,0v-0.1v-24.6v-2.9v-11.6    c0-6.6-0.8-11.4-2.4-14c-1.6-2.7-4.2-4.1-7.6-4.1c-2.4,0-4.3,0.8-5.7,2.3s-2.3,4.2-2.7,7.9l-0.2,1.8c-0.3,5-1.4,7.2-3.1,9    c-1.8,1.9-4.1,2.9-6.8,2.9c-2.5,0-4.6-0.8-6.2-2.3c-1.6-1.5-2.4-3.6-2.4-6.2c0-3.9,1.4-7.3,4.1-10c2.8-2.7,6.5-4.8,11-6.1    C162.1,109.9,167.1,109.2,172.4,109.2"
          />
        </g>
        <g>
          <path
            id="path-4"
            d="M242.1,122.9v49.8c0,3.8,1.7,6.2,5.1,7.2l1.3,0.4v1.5h-34.4v-1.5l2-0.6c3.4-1,5.1-3.4,5.1-7.2v-45.8    c0-2.1-0.3-3.7-1-4.8c-0.7-1-2-1.7-4-2.1l-2.2-0.6v-1.5l25-8.5l1.5,1.5l1.2,8.8L242.1,122.9z"
          />
          <path
            id="path-5"
            d="M258.5,181.6H293v-1.4l-1.3-0.4c-3.7-1-5.6-3.4-5.6-7.2v-42.2c0-7.2-1.7-12.6-5.2-16.1    c-3.4-3.5-8.4-5.3-14.8-5.3c-4.2,0-8.4,1-12.7,2.9c-3,1.4-5.9,3-8.5,5l0.3,3.4c3.9-2.7,7.6-4,10.9-4c6.3,0,9.4,3.2,9.4,9.4v46.7    c0,3.7-1.7,6.2-5.2,7.2l-1.9,0.6v1.4H258.5z"
          />
        </g>
        <g>
          <path
            id="path-6"
            d="M365.2,79.2l1.5,1.2l-0.6,20.4v71.6c0,2,0.3,3.6,1,4.8s2,2.1,3.9,2.6l1.2,0.4v1.3l-24.8,1.6l-1.2-5.1v-3.2    v-57.9v-0.1h-0.1c-3.7-2.4-7.9-3.7-11.7-3.7c-4.7,0-8.8,2.8-12.1,8.2c-3.3,5.4-5,14-5,25.6s1.6,19.9,4.7,24.6    c3.1,4.7,7.3,7.2,12.3,7.2c2.6,0,5.4-0.7,8.1-1.8c0,0.8,0,2-0.1,3.2c-1.7,0.8-3.5,1.6-5.4,2.2c-3.3,1.1-7.1,1.6-11.2,1.6    c-5.7,0-10.9-1.3-15.5-3.9c-4.5-2.6-8.2-6.6-10.9-11.9c-2.7-5.4-4-12.4-4-20.8c0-8.5,1.5-15.7,4.5-21.2c3-5.6,7-9.8,12-12.5    c4.9-2.8,10.4-4.2,16.2-4.2c3.4,0,6.7,0.3,9.8,1c3.1,0.7,5.9,1.7,8.3,3.1l0.2,0.1v-0.2v-19c0-2.1-0.3-3.6-1-4.6s-2-1.7-4.1-2.1    l-2.7-0.6v-1.3L365.2,79.2"
          />
        </g>
        <g>
          <path
            id="path-7"
            d="M410.6,109.2c6.3,0,11.7,1.3,16.2,3.9c4.4,2.6,7.9,6.1,10.3,10.5s3.6,9.5,3.6,15.1c0,1,0,2.1-0.1,3.3    c-0.1,1.1-0.3,2-0.6,2.9h-39.7v-2.7h21.2h0.1v-0.1c1-10.6,0.6-18.4-1.2-23c-1.8-4.7-5.2-7.1-10.2-7.1c-2.8,0-5.3,0.9-7.3,2.6    s-3.6,4.8-4.7,9.1c-1.1,4.3-1.7,10.5-1.8,18.4v2.9c0.1,10.5,2,18.2,5.7,22.8s9.2,7,16.4,7c4.9,0,8.9-0.8,11.9-2.4    c3-1.5,5.8-3.8,8.4-6.8l1.3,1.2c-3,5.3-7,9.5-12,12.5s-11,4.5-18,4.5c-6.9,0-13.1-1.5-18.4-4.4c-5.3-3-9.5-7.2-12.5-12.8    c-3-5.5-4.5-12.2-4.5-19.8c0-7.9,1.8-14.8,5.3-20.4s8-9.9,13.5-12.8C398.7,110.7,404.5,109.2,410.6,109.2"
          />
        </g>
        <g>
          <path
            id="path-8"
            d="M492.6,109.2c3.7,0,6.5,1,8.4,3s2.9,4.6,2.9,7.7c0,3.3-0.9,5.8-2.8,7.6s-4.1,2.7-6.7,2.7    c-4,0-7.7-2.1-10.7-6.1l-0.3-0.3c-1-1.4-2.2-2.2-3.5-2.3c-0.1,0-0.3,0-0.4,0c-1.2,0-2,0.3-3.3,1.6c-1,1.1-1.7,2.1-2.4,3.4    c-0.6,1.2-1.2,2.6-1.8,4.2l0,0l0,0v40.8c0,3.9,1.8,6.5,5.2,7.4l4.6,1.3v1.2h-37.7v-1.2l2.1-0.6c2-0.6,3.4-1.5,4.1-2.7    s1.1-2.7,1.1-4.6v-45.8c0-2.2-0.4-3.8-1.1-4.8s-2.1-1.8-4.1-2.2l-2.1-0.6v-1.3l25-8.4l1.4,1.4l1.3,12.5v1.2v0.5l0.2-0.5    c1.4-2.7,3.1-5.2,5.3-7.5c2.2-2.3,4.6-4.2,7.3-5.6C487.3,110,490,109.2,492.6,109.2"
          />
        </g>
      </g>
      <g>
        <polygon
          id="polygon"
          points="21.8,181.4 0,181.4 0,0 181.4,0 181.4,101.9 180.1,101.9 180.1,1.2 1.3,1.2 1.3,180.1 21.8,180.1  "
        />
      </g>
    </StyledSVG>
  );
}

export default Loading