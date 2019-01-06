import React from 'react'
import { Spring } from 'react-spring'
import ImageZoom from 'react-medium-image-zoom'
import AnimatedDiv from './AnimatedDiv'
import AnimatedText from './AnimatedText'


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

export default ({ project }) => {
  return (
    <>
      <div className="main-desc-project">
        <div>
        <AnimatedDiv>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </AnimatedDiv>
        </div>
        <div>
          <AnimatedDiv from={'right'}>
            <Counter project={project} />
          </AnimatedDiv>          
        </div>
      </div>
      <AnimatedText from={'right'}>
        {project.cover}
      </AnimatedText>
      <AnimatedDiv from={'left'}>
        <div className="project-url">
          <a href={project.url}>
            <div>Visit website</div>
          </a>
        </div>
      </AnimatedDiv>
      <h3>Examples</h3>
      <span
        className="image main"
        style={{
          display: 'block',
          paddingTop: 20
        }}
      >
        {project.images.map(image =>
          <ImageZoom
            defaultStyles={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.7)'
              }
            }}
            image={{
              src: image,
              alt: 'image',
              className: 'img',
              style: {
                paddingBottom: 20,
                maxHeight: 620,
                maxWidth: '80%',
                width: 'unset',
                margin: '0 auto'
              }
            }}
            zoomImage={{
              src: image,
              alt: 'image',
            }}
          />
        )}
      </span>
    </>
  )
}
