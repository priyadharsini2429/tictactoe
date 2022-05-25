import React from "react";
import ReactDOM from "react-dom/client";
import Game from "./Components/Game";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);
