import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import AnimatedText from './AnimatedText'

import profilePic from '../images/profile.jpg';

const Icons = [
  'js-square',
  'react',
  'html5',
  'css3-alt',
  'grunt',
  'angular',
  'node',
  'git',
  'python'
]

const Intro = ({ close }) => {
  return (
    <div className="intro">
      <h2>
        Hello, my name is Rafael.
      </h2>
      <div className="image main">
        <img id="img-profile" src={profilePic} alt="" />
        <div className="info-container">
          <div>
          <AnimatedText from={'right'}>
            <FontAwesomeIcon size='lg' icon={['fas', 'birthday-cake']} />
            <span className="info-intro">
              Birthday: 04/12/1993
            </span>
          </AnimatedText>
          </div>
          <div>
            <AnimatedText from={'right'}>
              <FontAwesomeIcon size='lg' icon={'phone-square'} />
              <span className="info-intro">
                  Phone Number: +584126035221
              </span>
            </AnimatedText>
          </div>
          <div>
            <AnimatedText from={'right'}>
              <FontAwesomeIcon size='lg' icon={['fas', 'envelope-square']} />
              <span className="info-intro">
                rafaelpina636@gmail.com
              </span>
            </AnimatedText>
          </div>
          <div>
            <span>Skills: </span>
            <div style={{ display: 'inline-block', transform: 'translateY(6px)' }}>
              {Icons.map(icon => 
                <FontAwesomeIcon
                  icon={['fab', icon]}
                  key={`${icon}-skills`}
                  style={{ paddingLeft: 10 }}
                  size={'2x'}
                />)
              }
            </div>
          </div>
        </div>
      </div>
      <AnimatedText from={'top'}>
        I'm a software engineer with a degree in Computer Science from Universidad Central de Venezuela, i have experience on deploying complex websites and mobile apps using ReactJs/React Native, AngularJs and NodeJs. I’m most interested in web development for it is the medium which best challenges my intellect, technical skills, creativity, and aesthetic proclivities
      </AnimatedText>
      <AnimatedText from={'right'}>
        I'm passionate on building software that adds value to people's lives.
      </AnimatedText>
      <AnimatedText from={'left'}>
        It was this desire to create things that led me to start studying computer science and be a full stack developer, since i was a teenager at school when i took that curiosity and started building websites.
      </AnimatedText>
      <div className='social'>
        <FontAwesomeIcon
          icon={['fab', 'github']}
          size={'2x'}
          onClick={() => window.location.href = 'https://github.com/rafaalb'}
          className='icon-git'
        />
      </div>
      {close}
    </div>
  )
}

export default Intro
