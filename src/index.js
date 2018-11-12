import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import htmlIcon from "./assets/images/html.png";

const Index = () => {
  return (
    <div className="hello-world">
      {/**<img src={htmlIcon} alt="htmlIcon" />**/}
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
