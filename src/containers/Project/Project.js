import React from "react";

import "./Project.scss";

const Project = () => {
  return (
    <div className="project-main">
      <h1 className="project-title">Projects</h1>
      <ul className="project-list">
        <li>
          {/* 리액트는 다르게 움직이는 것 같음... 더 알아봐야 할 듯 */}
          <a href="./index.html">Link</a>
        </li>
      </ul>
    </div>
  );
};

export default Project;
