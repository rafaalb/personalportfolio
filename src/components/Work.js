import React, { Component } from 'react'
import SingleProject from './SingleProject'
import { projects } from '../fixtures/projects'
import Projects from './Projects'

export default class Work extends Component {
  state = {
    selected: projects[0]
  }
  render() {
    return (
      <div className="work-container">
        <div className="work-details">
          <h2 className="major">
            Work
          </h2>
          <SingleProject
            project={this.state.selected}
            key={`single-project-${this.state.selected.name}`}
          />
        </div>
        <div className="proj-container">
          <Projects
            onSelect={(project) => 
              this.setState({ selected: project })
            }
          />
        </div>
      </div>
    )
  }
}
