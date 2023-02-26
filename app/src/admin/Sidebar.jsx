import React from 'react';

import styled from 'styled-components';

const StyledSideBar = styled.nav`
    height: ${props => `calc(100% - ${props.navHeight}px);`};
    overflow: scroll;
    background: #e9e9e9;
    border: 1px solid black;
    width: 300px;
    position: fixed;


`

const Sidebar = ({navHeight}) => {
  return (
    <StyledSideBar navHeight={navHeight}>
      <div>
        Content
      </div>
    </StyledSideBar>
  )
}

export default Sidebar