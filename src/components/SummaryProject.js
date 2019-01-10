import React from 'react'
import AnimatedDiv from './AnimatedDiv'
import { Spring } from 'react-spring'
import AnimatedText from './AnimatedText'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'

const AnimatedSpan = styled.span`
  margin-right: -1px;
  position: relative;
  font-size: 19px;
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 5px;
    left: 5.1px;
    width: 2px;
    height: ${props => props.height}px;
    background: #ffffff;
  }
`;

const TechText = styled.div`
  text-align: right;
  margin-bottom: 20px;
  position: relative;
  font-family: medium-content-sans-serif-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
  &:after {
    width: ${props => props.width}%;
    bottom: 0;
    left: 0;
    display: block;
    content: '';
    height: ${props => props.border}px;
    background: white;
  }
`;

const Counter = ({ project }) => {
  if (!project.perks) return null
  return Object.keys(project.perks).map(perk =>
    <Spring
      from={{ number: 0 }}
      to={{ number: project.perks[perk] }}
      config={{ delay: 1500 }}
      key={perk}
    >
      {props =>
        <div>
          <h2>
            {String(project.perks[perk]).includes('.') ?
              props.number.toFixed(1) :
              props.number.toFixed(0)
            }
            <span>{`  ${perk}`}</span>
          </h2>
        </div>
      }
    </Spring>
  )
}

const Skills = ({ skills }) => (
  skills.map(skill => (
    <FontAwesomeIcon
      style={{ marginLeft: 25, cursor: 'pointer' }}
      icon={['fab', skill]}
      size={'2x'}
      data-tip={skill}
    />
  ))
)

const TechUsed = ({ project }) => (
  <>
    <Spring
      from={{ height: 0, border: 0, width: 0 }}
      to={{ height: 22, border: 1, width: 100  }}
      config={{ duration: 1500, delay: 1000 }}
    >
      {({ height, border, width }) => (
        <TechText width={width} border={border}>
          <AnimatedSpan height={height}>
            T
          </AnimatedSpan>
          ech Used
        </TechText>
      )}
    </Spring>
    <Skills skills={project.skills} />
  </>
)


export default ({ project }) => {
  return (
    <div className="main-desc-project">
      <div className={'proj-details-space'}>
        <AnimatedDiv style={{ width: '30%' }}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </AnimatedDiv>
        <AnimatedDiv from={'right'} style={{ maxWidth: '70%' }}>
          <TechUsed project={project} />
        </AnimatedDiv>
      </div>
      <div>
        <AnimatedDiv from={'right'}>
          <Counter project={project} />
        </AnimatedDiv>          
      </div>
      <AnimatedText from={'right'}>
        {project.cover}
      </AnimatedText>
      <AnimatedDiv from={'bottom'}>
        <h3>Technical Details: </h3>
        {project.technicalDesc.map((desc) => (
          <div key={`desc-${desc}`}>
            <p>{desc}</p>
          </div>
        ))}
      </AnimatedDiv>
      <AnimatedDiv from={'left'}>
        <div className="project-url">
          {project.url &&
            <a href={project.url}>
              <div>Visit website</div>
            </a>
          }
        </div>
      </AnimatedDiv>
      <ReactTooltip
        className='tooltip'
      />
    </div>
  )
}
