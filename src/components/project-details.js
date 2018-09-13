import React from 'react'

import Gallery from './gallery'
import Content from './content'
import Cell from '../system/cell'
import Flex from '../system/flex'
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

const ProjectDescription = ({ project, ...props }) => {
  const [details, description] = getDescription(project)

  return (
    <Flex
      {...props}
      flexDirection={['column', 'row']}
      zIndex={[1, 100]}
      bg={project.frontmatter.color}
      cursor="initial"
      p={[0, 20]}
    >
      {details && <Markdown html={details} mr={[0, 20]} mb={[20, 0]} />}
      <Markdown html={description} maxWidth={500} textAlign="justify" />
    </Flex>
  )
}

const ProjectDetails = ({ project, ...props }) => (
  <Content
    {...props}
    display={['flex', 'grid']}
    flexDirection="column"
    bg={project.frontmatter.color}
    overflow="hidden"
    pt={[80, 20]}
  >
    <Cell gridColumn="1" flexDirection="column" mt={[0, 130]} mr={[0, 4]}>
      <Text children={project.frontmatter.title} />
      <Text children={project.frontmatter.subtitle} />
    </Cell>

    <Gallery is={Cell} py={50}>
      {project.fields.images.map(({ childImageSharp: image }) => (
        <Image
          key={image.fluid.src}
          src={image.fluid.src}
          maxWidth="100%"
          maxHeight="100%"
        />
      ))}

      <ProjectDescription project={project} />
    </Gallery>
  </Content>
)

export default ProjectDetails
