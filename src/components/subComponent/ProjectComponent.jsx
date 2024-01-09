import React from "react";
import "../projects.css";
export default function ProjectComponent() {
  return (
    <div className="box">
      <div className="box--image">
        <img src="" alt="project--image" />
      </div>
      <div className="box--text">
        <div className="project--heading">
          <h4>To Do</h4>
        </div>
        <div className="project--text">
          <p>create a todo list website</p>
        </div>
        <div className="project--stack">
          <ul className="project--stack-list">
            <li>React</li>
            <li>ExpressJs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
