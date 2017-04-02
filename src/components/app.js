import React, { Component } from 'react';
import ProjectList from './project_list'
import ProjectShow from './project_show'


export default class App extends Component {
  constructor(props) {
  super(props)

  this.state = {
    projects: projects,
    selectedProject: null
   }
}

  render() {
    const projectInfo = [
      {
        name: 'Intrpretr',
        description: 'Description of and Reasoning Behind Project',
        role: 'Role I played in making project',
        tech: ['Tech','I','Used','In','Making','Project'],
        pictures: ['url1', 'url2', 'url3']
      },
      {
        name: 'GA Hackathon',
        description: 'Description of and Reasoning Behind Project',
        role: 'Role I played in making project',
        tech: ['Tech','I','Used','In','Making','Project'],
        pictures: ['url1', 'url2', 'url3']
      },
      {
        name: 'SF Travelogue',
        description: 'Description of and Reasoning Behind Project',
        role: 'Role I played in making project',
        tech: ['Tech','I','Used','In','Making','Project'],
        pictures: ['url1', 'url2', 'url3']
      }
    ]

    return (
      <div className="test row">
        <div className="center col m3">
          <ProjectList projectInfo={projectInfo}
            onProjectSelect={selectedProject => this.setState({selectedProject})} />
        </div>
        <div className="col m9">
          <ProjectShow project={this.state.selectedProject} />
        </div>
      </div>
    );
  }
}
