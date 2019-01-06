import React, { Component } from 'react'
import { Transition, animated } from 'react-spring'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class NameOptions extends Component {
  state = {
    logos: [
      'js-square',
      'react',
      'html5',
      'css3-alt',
      'grunt',
      'angular',
      'node',
      'git',
      'python'
    ],
    index: 0
  }
  componentDidMount() {
    const { logos } = this.state;
    const newIndex = this.state.index + 1;
    setTimeout(() => {
      this.setState({
        index: logos[newIndex] ? newIndex : 0
      }, this.componentDidMount)
    }, 3000)
  }
  render() {
    return (
      <div className="logo">
        <Transition
          native
          reset
          unique
          items={this.state.index}
          from={{ opacity: 0, transform: 'translateX(100%)' }}
          enter={{ opacity: 1, transform: 'translateX(0%)' }}
          leave={{ opacity: 0, transform: 'translateX(-50%)' }}
        >
          {index => props => 
            <animated.div
              style={{
                ...props,
                display: 'flex',
                position: 'absolute'
              }}
            >
              <FontAwesomeIcon
                style={{ ...props, cursor: 'pointer' }}
                icon={['fab', this.state.logos[index]]}
                size={'3x'}
              />
            </animated.div>
          }
        </Transition>
      </div>
    )
  }
}