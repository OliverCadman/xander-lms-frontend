import React from 'react';

import {Outlet} from 'react-router-dom';
import Navbar from './Navbar';

const SharedLayout = ({navref}) => {
  return (
    <>
      <Navbar ref={navref} />
      <Outlet />
    </>
  );
}

export default SharedLayout