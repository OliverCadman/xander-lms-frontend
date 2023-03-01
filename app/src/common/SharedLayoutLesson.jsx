import React from "react";

import { Outlet } from "react-router-dom";
import Topic from '../pages/Topic';

const SharedLayoutLesson = ({ navHeight, activeLessonID, getNextLessonName }) => {
  return (
    <>
      <Topic navHeight={navHeight} activeLessonID={activeLessonID} getNextLessonName={getNextLessonName} />
      <Outlet />
    </>
  );
};

export default SharedLayoutLesson;
