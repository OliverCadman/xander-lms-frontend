import React, { useEffect, useState, createRef } from "react";
import GlobalStyle from "./styles/global/globalStyle";

import ProtectedRoute from "./pages/ProtectedRoute";
import SharedLayout from "./common/SharedLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import LearningPlatform from "./pages/LearningPlatform";
import LessonBuilderLanding from "./pages/admin/LessonBuilderLanding";
import Modules from "./pages/Modules";
import Module from "./pages/Module";
import Topic from "./pages/Topic";
import Landing from "./judge0/components/Landing";
import { useLocation } from "react-router-dom";
import { loadKlipseScript } from "./helpers/LoadKlipseScript";

import { useAuth } from "./context/AuthContext";
import { AuthProvider } from "./context/AuthContext";

import { Routes, Route } from "react-router-dom";

import LessonBuilder from "./admin/LessonBuilder";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

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
  console.log(navHeight)

  const { token, redirect } = useAuth();
  const navRef = createRef();
  const headerRef = createRef();

  const location = useLocation();

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
                  <Home navbarheight={navHeight} />
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
            <Route path="modules" element={<Modules navHeight={navHeight} />} />
            <Route path="modules/:id" element={<Module navHeight={navHeight} headerRef={headerRef} headerHeight={headerHeight} />} />
            <Route path="modules/:id/topics/:id" element={<Topic navHeight={navHeight} />}></Route>
            <Route path="test_suite" element={<Landing />} />
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
