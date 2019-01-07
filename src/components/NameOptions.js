import React, { Component } from 'react'
import { Transition } from 'react-spring'

export default class NameOptions extends Component {
  state = {
    names: [
      'Software Engineer',
      'Web Developer',
      'Critical thinker',
      'Team player',
      'Problem solver',
      'Full Stack developer'
    ],
    index: 0
  }
  componentDidMount() {
    const { names } = this.state;
    const newIndex = this.state.index + 1;
    setTimeout(() => {
      this.setState({
        index: names[newIndex] ? newIndex : 0
      }, this.componentDidMount)
    }, 3000)
  }
  render() {
    return (
      <Transition
        items={this.state.index}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0, display: 'none' }}>
        {index => props => <span style={props}>{this.state.names[index]}</span>}
      </Transition>
    )
  }
}
