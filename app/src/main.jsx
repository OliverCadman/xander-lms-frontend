import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import {BrowserRouter} from 'react-router-dom';

globalThis.klipse_settings = {
  selector_eval_js: ".language-klipse-eval-js",
  selector_eval_html: ".html",
  codemirror_options_in: {
    indentUnit: 2,
    lineWrapping: true,
    lineNumbers: true,
    autoCloseBrackets: true,
  },
  codemirror_options_out: {
    lineWrapping: true,
    lineNumbers: true,
  },
  editor_type: "code-mirror",
};


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
