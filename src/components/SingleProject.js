import React from 'react'
import ImageZoom from 'react-medium-image-zoom'
import SummaryProject from './SummaryProject'

export default ({ project }) => {
  return (
    <>
      <SummaryProject project={project} />
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
            key={`imageproject-${image}`}
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
