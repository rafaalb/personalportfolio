import React, { Component } from 'react'
import { initHeader, initAnimation, addListeners } from '../assets/js/starsgenerator'
import '../assets/scss/canvas.scss'
  
export default class Stars extends Component {
  componentDidMount() {
    initHeader()
    initAnimation()
    addListeners()
  }
  render() {
    return (
      <div id="large-header" className="large-header">
        <canvas id="stars-canvas"></canvas>
      </div>
    )
  }
}
  