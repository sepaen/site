import React from 'react'

import Gallery from './gallery'
import Content from './content'
import Cell from '../system/cell'
import Flex from '../system/flex'
import Text from '../system/text'
import Image from '../system/image'
import Markdown from '../system/markdown'

const ProjectDescription = ({ project, ...props }) => {
  const [details, description] = project.html.split('<hr>')

  return (
    <Flex
      {...props}
      flexDirection={['column', 'row']}
      zIndex={[1, 100]}
      bg={project.frontmatter.color}
      cursor="initial"
      p={20}
    >
      <Markdown html={details} mr={[0, 20]} mb={[20, 0]} />
      <Markdown html={description} textAlign="justify" />
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
    <Cell gridColumn="1" flexDirection="column" mt={[0, 180]} mr={[0, 4]}>
      <Text children={project.frontmatter.title} />
      <Text children={project.frontmatter.subtitle} />
    </Cell>

    <Gallery is={Cell} py={50}>
      {project.frontmatter.images.map(({ image }) => (
        <Image key={image} src={image} maxWidth="100%" maxHeight="100%" />
      ))}

      <ProjectDescription project={project} />
    </Gallery>
  </Content>
)

export default ProjectDetails
