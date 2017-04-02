import React, { Component } from 'react'
import ProjectSelect from './project_select'


const ProjectList = (props) => {

  const projectInfo = props.projectInfo.map((project) => {
    return (
      <ProjectSelect
        key={project.name}
        onProjectSelect={props.onProjectSelect}
        project={project} />
    )
  })

  return (
      <ul className='project-list'>
        {projectInfo}
      </ul>
  )
}

export default ProjectList
