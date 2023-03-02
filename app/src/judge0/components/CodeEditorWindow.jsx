import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditorWindow = ({ onChange, language, code, theme, testQuestions}) => {
  const [value, setValue] = useState(code || "");
  const {starter_code} = testQuestions[3]
  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="65vh"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme='vs-dark'
        defaultValue= {code}
        onChange={handleEditorChange}
      />
    </div>
  );
};
export default CodeEditorWindow;
