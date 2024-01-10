import React from 'react'
import "./projects.css"
import ProjectComponent from './subComponent/ProjectComponent'
import projectDatas from "../data.js"
export const Projects = () => {
  return (
    <div className='container-fluid' id='Projects'>
      <div className='heading'>
        <h1>Projects</h1>
        {projectDatas.map((projectData,index) => <ProjectComponent project={projectData} key={index}/>)}
      </div>
    </div>
  )
}
