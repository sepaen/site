import React from 'react'

import Gallery from './gallery'
import Content from './content'
import Cell from '../system/cell'
import Flex from '../system/flex'
import Text from '../system/text'
import Image from '../system/image'
import Markdown from '../system/markdown'
import Link from '../system/link'

function margin(i) {
  return (i % 2 - 1) * 30
}

const ProjectDescription = ({ project, ...props }) => (
  <Flex
    {...props}
    height="50%"
    bg="red"
    p={20}
  >
    <Flex flexDirection="column" mr={20}>
      <Text children={project.frontmatter.client} />
      <Text children={project.frontmatter.date} mb={20} />

      <Text children={project.frontmatter.extra} />
      <Text children={project.frontmatter.extra} mb={20} />

      <Link to={project.frontmatter.url} children={project.frontmatter.url} />
    </Flex>

    <Markdown html={project.html} />
  </Flex>
)


const ProjectDetails = ({ project, ...props }) => (
  <Content {...props} overflow="hidden">
    <Cell gridColumn="1" flexDirection="column" height="66%" mr={4}>
      <Text children={project.frontmatter.title} />
    </Cell>

    <Gallery is={Cell} gridColumn="2/6">
      {project.frontmatter.images.map((image, i) => (
        <Image
          key={image.publicURL}
          src={image.publicURL}
          maxWidth="90%"
          maxHeight="90%"
          ml={margin(i)}
          mt={margin(i)}
        />
      ))}

      <ProjectDescription project={project} />
    </Gallery>
  </Content>
)

export default ProjectDetails
