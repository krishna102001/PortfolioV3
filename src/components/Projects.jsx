import React from 'react'
import "./projects.css"
import ProjectComponent from './subComponent/ProjectComponent'
export const Projects = () => {
  return (
    <div className='container-fluid' id='Projects'>
      <div className='heading'>
        <h1>Projects</h1>
        <ProjectComponent />
      </div>
    </div>
  )
}
