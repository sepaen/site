import React from 'react'

import Gallery from './gallery'
import Content from './content'
import Cell from '../system/cell'
import Box from '../system/box'
import Text from '../system/text'
import Image from '../system/image'
import Markdown from '../system/markdown'
import { keyframes } from 'emotion'

function getDescription(project) {
  let [details, description] = project.html.split('<hr>')

  if (!description) {
    description = details
    details = null
  }

  return [details, description]
}

const ProjectDescriptionBox = Box.with({
  flexDirection: 'column',
  zIndex: 1,
  cursor: 'initial',
  p: 0,

  desktop: {
    flexDirection: 'row',
    zIndex: 100,
    p: 2
  }
})

const ProjectDescription = ({ project, ...props }) => {
  const [details, description] = getDescription(project)

  return (
    <ProjectDescriptionBox {...props} bg={project.frontmatter.color}>
      {details && <Markdown html={details} mr={[0, 2]} mb={[5, 0]} />}
      <Markdown html={description} maxWidth={500} textAlign="justify" />
    </ProjectDescriptionBox>
  )
}

const ProjectContent = Content.with({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  pt: 10,

  desktop: {
    display: 'grid',
    pt: 2
  }
})

const ProjectSummary = Cell.with({
  flexDirection: 'column',
  opacity: 0,
  mt: 0,
  mr: 0,

  desktop: {
    gridColumn: 1,
    mt: 16,
    mr: 4
  }
}).animate(
  '500ms ease-in-out 1s forwards',
  keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 }
  })
)

const ProjectGallery = Cell.with({
  as: Gallery,
  pt: 4,
  pb: 6
})

const ProjectImage = Image.with({
  maxWidth: '100%',
  maxHeight: '100%'
})

const ProjectDetails = ({ project, ...props }) => (
  <ProjectContent {...props} bg={project.frontmatter.color}>
    <ProjectSummary>
      <Text whiteSpace="pre-wrap">
        {project.frontmatter.fulltitle || project.frontmatter.title}
        {project.frontmatter.subtitle}
      </Text>
    </ProjectSummary>

    <ProjectGallery>
      {project.fields.images.map(
        ({ childImageSharp: image }) =>
          image && <ProjectImage key={image.fluid.src} img={image.fluid.src} />
      )}

      <ProjectDescription project={project} />
    </ProjectGallery>
  </ProjectContent>
)

export default ProjectDetails
