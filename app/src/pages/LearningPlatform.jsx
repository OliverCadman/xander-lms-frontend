import React, { useState, useEffect, useCallback } from "react";
import {
  loadKlipseScript
} from "../helpers/LoadKlipseScript";
import InteractiveEditor from "../components/InteractiveEditor";
import {useLocation} from 'react-router-dom';
import { useLocationChange } from "../hooks/useLocationChange";

const LearningPlatform = () => {
const [scriptLoaded, setScriptLoaded] = useState(false);
useEffect(() => {
    loadKlipseScript();
    setScriptLoaded(true);
}, [])

  return <>{scriptLoaded ? <InteractiveEditor /> : ""}</>; 
};

export default LearningPlatform;
