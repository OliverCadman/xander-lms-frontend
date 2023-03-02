import React from "react";

import { Outlet } from "react-router-dom";
import Topic from '../pages/Topic';

const SharedLayoutLesson = ({ navHeight, activeLessonID, activeExerciseID, getNextLessonName }) => {
  return (
    <>
      <Topic 
      navHeight={navHeight} 
      activeLessonID={activeLessonID} 
      activeExerciseID={activeExerciseID}
      getNextLessonName={getNextLessonName}
      />
      <Outlet />
    </>
  );
};

export default SharedLayoutLesson;
