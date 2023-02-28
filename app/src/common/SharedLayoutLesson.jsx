import React from "react";

import { Outlet } from "react-router-dom";
import Topic from '../pages/Topic';

const SharedLayoutLesson = ({navHeight}) => {
  return (
    <>
      <Topic navHeight={navHeight} />
      <Outlet />
    </>
  );
};

export default SharedLayoutLesson;
