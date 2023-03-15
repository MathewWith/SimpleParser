import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { TextAreaContext } from "../../App";
import cn from "classnames";

import "./Header.css";

export const Header = ({ setFileContent, fileContent }) => {
  const { setIsTextArea } = useContext(TextAreaContext);
  const location = useLocation();

  return (
    <div className="app_head">
      <Link
        className="link-title"
        to="/"
        onClick={() => {
          setFileContent(null);
          setIsTextArea(null);
        }}
      >
        {`Simple{parser}`}
      </Link>
      <div className="app_head-buttons">
        <Link
          className={cn("link-button_back", {
            visible: location.pathname === "/content" && fileContent,
          })}
          to="/"
          onClick={() => {
            setFileContent(null);
            setIsTextArea(null);
          }}
        >
          Назад
        </Link>
        <Link
          className={cn("link-button", { disabled: !fileContent })}
          to="content"
        >
          ПАРСИТЬ
        </Link>
      </div>
    </div>
  );
};
