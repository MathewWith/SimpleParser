import { useState, createContext } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Router } from "./components/Route";

const isTextArea = {
  isTextArea: null,
  setIsTextArea: function (value) {
    isTextArea.isTextArea = value;
  },
};

export const TextAreaContext = createContext(isTextArea);

function App() {
  const [fileContent, setFileContent] = useState(null);

  return (
    <TextAreaContext.Provider value={isTextArea}>
      <div className="app">
        <Header fileContent={fileContent} setFileContent={setFileContent} />
        <div className="app_content">
          <Router fileContent={fileContent} setFileContent={setFileContent} />
        </div>
      </div>
    </TextAreaContext.Provider>
  );
}

export default App;
