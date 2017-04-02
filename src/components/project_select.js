import React, { Component } from 'react'

const ProjectSelect = ({project, onProjectSelect}) => {
  return (
    <li className="list-item"
      onClick={() => onProjectSelect(project)}>
      <div className='project-select'>
        {project.name}
      </div>
    </li>
  )
}

export default ProjectSelect
