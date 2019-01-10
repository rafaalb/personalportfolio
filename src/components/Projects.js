import React, { Component } from 'react'
import PropTypes from 'prop-types'
import List from './List'
import { projects } from '../fixtures/projects'
import { skills } from '../fixtures/skills'
import shuffle from 'lodash/shuffle'
import _ from 'lodash'
import { Transition } from 'react-spring'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects,
      proj: projects,
      skills,
      matching: [],
      selectedSkills: [],
      toggle: false
    }
    this.interval = null;
  }
  shuffle = () => this.setState(state => ({
      projects: shuffle(state.projects),
      matching: shuffle(state.matching),
  }))
  // componentDidMount() {
  //   let i = 0
  //   this.interval = setInterval(() => {
  //     this.shuffle()
  //     i++
  //     if (i === 3) clearInterval(this.interval)
  //   }, 7000)
  //   setTimeout(this.shuffle, 2000)
  // }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  getHeight = () => {
    try {
      return window.screen.width > 700 ? 140 : 170
    } catch (e) {}
  }
  renderItems = (items) => {
    return (
      <List
        className="main-list"
        items={items}
        keys={d => `${d.name}-project-list`}
        heights={d => this.getHeight()}
        config={{ mass: 4, tension: 100, friction: 40 }}>
        {item => (
          <div
            className="project-thumbnail"
            onClick={() => this.props.onSelect(item)}
          >
            <img src={item.image} />
            <div>
              <a><strong>{item.name}</strong></a>
              <br />
              {item.description}
            </div>
          </div>
        )}
      </List>
    )
  }

  addMatching = () => {
    const matching = this.state.proj.filter(project => {
      const hasSkill = this.state.selectedSkills.some(skill => {
        return project.skills.indexOf(skill) !== -1
      })
      return hasSkill
    })
    const projects = this.state.proj.filter(project => 
      !matching.some(match => match.name === project.name)
    )

    this.setState({
      matching,
      projects: !_.size(matching) ? this.state.proj : projects
    })
    this.shuffle()
  }

  addOrRemoveSkill = (skill) => {
    let skills = []
    if (this.state.selectedSkills.includes(skill)) {
      skills = this.state.selectedSkills.filter(auxSkill => auxSkill !== skill)
    } else {
      skills = this.state.selectedSkills.concat(skill)
    }
    this.setState({ toggle: !this.state.toggle, selectedSkills: skills }, () => {
      this.addMatching()
    })
  }
  render() {
    const { selectedSkills } = this.state;
    return (
      <div className="projects-container">
        <div className="skills-projects">
          <ul>
            {this.state.skills.map(skill =>
              <li
                onClick={() => this.addOrRemoveSkill(skill)}
                style={
                  selectedSkills.includes(skill) ? { backgroundColor: 'rgba(255, 255, 255, 0.15)' } : {}
                }
                key={`${skill}-skill`}
              >
                {skill}
              </li>
            )}
          </ul>
        </div>
        <Transition
          items={this.state.toggle}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0, display: 'none' }}>
          {toggle => props => 
            <h3 style={props}>
              {_.size(this.state.matching) ? 'Matching projects' : ''}
            </h3>
          }
        </Transition>
        {this.renderItems(this.state.matching)}
        <Transition
          items={this.state.toggle}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0, display: 'none' }}>
          {toggle => props => 
            <h3 style={props}>
              {_.size(this.state.matching) === _.size(this.state.proj) ? '' : 'Projects'}
            </h3>
          }
        </Transition>
        {this.renderItems(this.state.projects)}
      </div>
    )
  }
}

Projects.propTypes = {
  onSelect: PropTypes.func
}

export default Projects