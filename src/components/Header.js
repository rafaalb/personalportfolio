import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NameOptions from './NameOptions'
import Logo from './Logo'
import RevealText from 'react-reveal-text'

class TextHeader extends Component {
    constructor() {
      super();
      this.state = { show: false };
    }

    componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 1000);
    }
  render() {
    return (
      <h1>
        <RevealText show={this.state.show}>
            Rafael Pina
        </RevealText>
      </h1>
    )
  }
}

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <Logo />
        <div className="content">
            <div className="inner">
                <TextHeader />
                <p>
                    I'm a <NameOptions /> mostly interested in Front End development <br /> but I am also open to learn from any good challenge that comes up
                    <br />
                    which best challenges my intellect, technical skills, creativity, and aesthetic proclivities
                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => window.location.href = '/cv.pdf'}>Resumé</a></li>
                {false && <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Resumé</a></li>}
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)



Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
