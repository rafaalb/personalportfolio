import React, { Component } from 'react'
import { Spring } from 'react-spring'
import PropTypes from 'prop-types'

class AnimatedText extends Component {
  static defaultProps = {
    from: 'top'
  }
  getPosition = () => {
    const { from } = this.props;
    if (from === 'top') return 'translate3d(0,-40px,0)'
    if (from === 'bottom') return 'translate3d(0,40px,0)'
    if (from === 'right') return 'translate3d(40px,0,0)'
    if (from === 'left') return 'translate3d(-40px,0,0)'
  }
  render() {
    const transform = this.getPosition()
    return (
      <Spring
        from={{ transform , opacity: 0 }}
        to={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
        config={{ delay: 500 }}
      >
        {props => 
          <p style={{ ...this.props.style, ...props }}>
            {this.props.children}
          </p>
        }
      </Spring>
    )
  }
}
AnimatedText.propTypes = {
  from: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired,
  style: PropTypes.object
}

export default AnimatedText;
