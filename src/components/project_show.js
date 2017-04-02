import React, { Component } from 'react'


const ProjectShow = (props) => {
  if (!props.project) {
  return (
      <div className="center noproject">
        <h4>Please Choose a Project to View</h4>
      </div>
    )
  }

  return (
    <div>
      <div className="project-title center">
        <h4>{props.project.name}</h4>
      </div>
      <div>

      </div>
    </div>
  )
}

export default ProjectShow
