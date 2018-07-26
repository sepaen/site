import React from 'react'

import Gallery from './gallery'
import Content from './content'
import Cell from '../system/cell'
import Flex from '../system/flex'
import Text from '../system/text'
import Image from '../system/image'
import Markdown from '../system/markdown'
import Link from '../system/link'

const ProjectDescription = ({ project, ...props }) => (
  <Flex {...props} height="50%" bg={project.frontmatter.color} p={20}>
    <Flex flexDirection="column" mr={20} mixBlendMode="difference">
      <Text children={project.frontmatter.client} />
      <Text children={project.frontmatter.date} mb={20} />

      <Text children={project.frontmatter.extra} />
      <Text children={project.frontmatter.extra} mb={20} />

      <Link to={project.frontmatter.url} children={project.frontmatter.url} />
    </Flex>

    <Markdown html={project.html} mixBlendMode="difference" />
  </Flex>
)

const ProjectDetails = ({ project, ...props }) => (
  <Content {...props} bg={project.frontmatter.color} overflow="hidden">
    <Cell
      gridColumn="1"
      flexDirection="column"
      height="66%"
      mixBlendMode="difference"
      mr={4}
    >
      <Text children={project.frontmatter.title} />
    </Cell>

    <Gallery is={Cell} gridColumn="2/6" py={50}>
      {project.frontmatter.images.map(image => (
        <Image
          key={image.publicURL}
          src={image.publicURL}
          maxWidth="100%"
          maxHeight="100%"
        />
      ))}

      <ProjectDescription project={project} width="calc(100% - 40px)" />
    </Gallery>
  </Content>
)

export default ProjectDetails
