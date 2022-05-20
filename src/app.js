// Modules
import React from "react";
import ReactDOM from "react-dom";

// CSS
import "normalize.css/normalize.css";
import "./styles/styles.scss";

// Components
const Component = () => {
  return (
    <div>
      <h1>NEW APP</h1>
    </div>
  );
};

ReactDOM.render(<Component />, document.getElementById("app"));
