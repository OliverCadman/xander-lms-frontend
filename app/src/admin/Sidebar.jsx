import React from 'react';

import styled from 'styled-components';

const StyledSideBar = styled.nav`
    height: ${props => `calc(100% - ${props.navHeight}px);`};
    overflow: scroll;
    background: #f4f4f4;
    border: 1px solid black;
    width: 300px;
    position: fixed;


`

const Sidebar = ({navHeight, children}) => {
  return (
    <StyledSideBar navHeight={navHeight}>
      {children}
    </StyledSideBar>
  )
}

export default Sidebar