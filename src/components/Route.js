import { useContext } from "react";
import { DropzoneButton } from "./Dropzone";
import { TableScrollArea } from "./Table";
import { Route, Routes } from "react-router-dom";
import { TextArea } from "./TextArea";
import { TextAreaContext } from "../App";
//Компоненты дроп зона и таблица взяты из библиотеки mantine

export const Router = ({ setFileContent, fileContent }) => {
  const { isTextArea, setIsTextArea } = useContext(TextAreaContext);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            {isTextArea !== 0 && (
              <DropzoneButton
                setFileContent={setFileContent}
                setIsTextArea={setIsTextArea}
              />
            )}
            {isTextArea !== 1 && (
              <TextArea
                setFileContent={setFileContent}
                setIsTextArea={setIsTextArea}
              />
            )}
          </div>
        }
      />
      <Route
        path="/content"
        element={<TableScrollArea data={fileContent} />}
      />
    </Routes>
  );
};
