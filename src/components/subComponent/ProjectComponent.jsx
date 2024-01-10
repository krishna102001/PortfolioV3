import React from "react";
import "../projects.css";
export default function ProjectComponent(props) {
  // console.log(props);
  const {id,projectName,projectImage,projectDescription,projectStack,projectGithubLink} = props.project;
  return (
    <div className="box" key={id}>
      <div>
        <img src={projectImage} alt="project--image" className="box--image"/>
      </div>
      <div className="box--text">
        <div className="project--heading">
          <h4>{projectName} <a href={projectGithubLink} target="_blank"><i className="fa-solid fa-link"></i></a></h4>
        </div>
        <div className="project--text">
          <p>{projectDescription}</p>
        </div>
        <div className="project--stack">
          <ul className="project--stack-list">
            {projectStack.map((stack)=> <li>{stack}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
