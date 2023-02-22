import React, { useEffect, useState, createRef } from "react";
import GlobalStyle from "./styles/global/globalStyle";

import ProtectedRoute from "./pages/ProtectedRoute";
import SharedLayout from "./common/SharedLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import LearningPlatform from "./pages/LearningPlatform";
import LessonBuilderLanding from "./pages/admin/LessonBuilderLanding";

import { useAuth } from "./context/AuthContext";
import { AuthProvider } from "./context/AuthContext";

import { Routes, Route } from "react-router-dom";

import LessonBuilder from "./admin/LessonBuilder";


function App() {
  return (
    <AuthProvider>
      <InnerApp />
    </AuthProvider>
  );
}

function InnerApp() {
  const [navHeight, setNavHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);

  const { token } = useAuth();
  const navRef = createRef();
  const headerRef = createRef();

  useEffect(() => {
    if (navRef.current) {
          const navRectHeight = navRef.current.getBoundingClientRect().height;
          setNavHeight(navRectHeight);
    }
    if (headerRef.current) {
       const headerRectHeight =
         headerRef.current.getBoundingClientRect().height;
          setHeaderHeight(headerRectHeight);
    }
  }, [])

  return (
    <>
      <GlobalStyle />
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
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="platform"
              element={
                <ProtectedRoute token={token}>
                  <LearningPlatform />
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
            <Route path="admin/lesson-builder" element={
                 <LessonBuilder
                  headerRef={headerRef}
                  navHeight={navHeight}
                  headerHeight={headerHeight}
                />
            } />
          </Route>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
