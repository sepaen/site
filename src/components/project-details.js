import React from 'react'

import Gallery from './gallery'
import Content from './content'
import Cell from '../system/cell'
import Box from '../system/box'
import Text from '../system/text'
import Image from '../system/image'
import Markdown from '../system/markdown'

function getDescription(project) {
  let [details, description] = project.html.split('<hr>')

  if (!description) {
    description = details
    details = null
  }

  return [details, description]
}

const ProjectDescriptionBox = Box.extend({
  flexDirection: ['column', 'row'],
  zIndex: [1, 100],
  cursor: 'initial',
  p: [0, 2]
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

const ProjectContent = Content.extend({
  display: ['flex', 'grid'],
  flexDirection: 'column',
  overflow: 'hidden',
  pt: [10, 2]
})

const ProjectSummary = Cell.extend({
  gridColumn: 1,
  flexDirection: 'column'
}).animate('500ms ease-in-out', {
  from: { opacity: 0 },
  to: { opacity: 1 }
})

const ProjectImage = Image.extend({
  maxWidth: '100%',
  maxHeight: '100%'
})

const ProjectDetails = ({ project, ...props }) => (
  <ProjectContent {...props} bg={project.frontmatter.color}>
    <ProjectSummary mt={[0, 16]} mr={[0, 4]}>
      <Text whiteSpace="pre-wrap">
        {project.frontmatter.fulltitle || project.frontmatter.title}
        {project.frontmatter.subtitle}
      </Text>
    </ProjectSummary>

    <Gallery pt={4} pb={6}>
      {project.fields.images.map(
        ({ childImageSharp: image }) =>
          image && <ProjectImage key={image.fluid.src} src={image.fluid.src} />
      )}

      <ProjectDescription project={project} />
    </Gallery>
  </ProjectContent>
)

export default ProjectDetails
