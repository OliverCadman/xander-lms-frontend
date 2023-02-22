import React from 'react';

import {Outlet} from 'react-router-dom';
import Navbar from './Navbar';

const SharedLayout = ({navRef}) => {
  return (
    <>
      <Navbar ref={navRef} />
      <Outlet />
    </>
  );
}

export default SharedLayout