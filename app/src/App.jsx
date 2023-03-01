import React, { useEffect, useState, createRef } from "react";
import GlobalStyle from "./styles/global/globalStyle";

import ProtectedRoute from "./pages/ProtectedRoute";
import SharedLayout from "./common/SharedLayout";
import SharedLayoutLesson from "./common/SharedLayoutLesson";
import Login from "./pages/Login";
import Home from "./pages/Home";
import LearningPlatform from "./pages/LearningPlatform";
import LessonBuilderLanding from "./pages/admin/LessonBuilderLanding";
import Modules from "./pages/Modules";
import Module from "./pages/Module";
import LessonWindow from "./components/LessonWindow";

import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useAuth } from "./context/AuthContext";
import { AuthProvider } from "./context/AuthContext";

import { Routes, Route } from "react-router-dom";

import LessonBuilder from "./admin/LessonBuilder";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <InnerApp />
      </AuthProvider>
    </QueryClientProvider>
  );
}

function InnerApp() {
  const [navHeight, setNavHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [activeLessonID, setActiveLessonID] = useState(null);
  const [nextLessonName, setNextLessonName] = useState(null);

  const { token, redirect } = useAuth();
  const navRef = createRef();
  const headerRef = createRef();

  const location = useLocation();

   const getLessonID = (id) => {
     // Lesson ID is shared between Sidebar in <SharedLayoutLesson />
     // and the <LessonWindow /> components.
     setActiveLessonID(id);
   };

   const getNextLessonName = (lessonData) => {
     console.log(lessonData);
     // Retrieve name of next lesson to display in Lesson Window
     let lessonName;
     const maxID = Math.max(...lessonData.lessons.map((lesson) => lesson.id));

     if (activeLessonID < maxID) {
       const nextLessonDetails = lessonData.lessons.find(
         (lesson) => lesson.id === parseInt(activeLessonID) + 1
       );
       lessonName = nextLessonDetails.lesson_name;
     } else {
       lessonName = "Move onto the next section";
     }

     setNextLessonName(lessonName);
   }

   

  useEffect(() => {
    if (navRef.current) {
      const navRectHeight = navRef.current.getBoundingClientRect().height;
      setNavHeight(navRectHeight);
    }
    if (headerRef.current) {
      const headerRectHeight = headerRef.current.getBoundingClientRect().height;
      setHeaderHeight(headerRectHeight);
    }
  }, [redirect, location]);

  return (
    <>
      <GlobalStyle navHeight={navHeight} />
      <ToastContainer />
      <Routes>
        <Route path="/">
          <Route
            path="xander-learning"
            element={
              <ProtectedRoute token={token}>
                <SharedLayout navRef={navRef} />
              </ProtectedRoute>
            }
          >
            <Route
              path="home"
              element={
                <ProtectedRoute token={token}>
                  <Home navbarheight={navHeight} />
                </ProtectedRoute>
              }
            />
            <Route
              path="admin"
              element={
                <LessonBuilderLanding
                  headerRef={headerRef}
                  navHeight={navHeight}
                  headerHeight={headerHeight}
                />
              }
            />
            <Route path="modules" element={<Modules navHeight={navHeight} />} />
            <Route
              path="modules/:moduleID"
              element={
                <Module
                  navHeight={navHeight}
                  headerRef={headerRef}
                  headerHeight={headerHeight}
                />
              }
            />
            <Route
              path="modules/:moduleID/topics/:topicID/lessons/*"
              element={
                <SharedLayoutLesson
                  activeLessonID={activeLessonID}
                  navHeight={navHeight}
                  getNextLessonName={getNextLessonName}
                />
              }
            >
              <Route
                path=":lessonID"
                element={<LessonWindow getLessonID={getLessonID} nextLessonName={nextLessonName }/>}
              />
            </Route>
            <Route
              path="admin/lesson-builder"
              element={
                <LessonBuilder
                  headerRef={headerRef}
                  navHeight={navHeight}
                  headerHeight={headerHeight}
                />
              }
            />
          </Route>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
