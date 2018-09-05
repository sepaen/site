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
  <Flex
    {...props}
    flexDirection={['column', 'row']}
    zIndex={[1, 100]}
    bg={project.frontmatter.color}
    cursor="initial"
    p={20}
  >
    <Flex flexDirection="column" mr={20}>
      <Text children={project.frontmatter.client} />
      <Text children={project.frontmatter.date} mb={20} />

      <Text children={project.frontmatter.extra} mb={20} />

      <Link
        href={project.frontmatter.url}
        target="blank"
        children={project.frontmatter.url}
      />
    </Flex>

    <Markdown html={project.html} />
  </Flex>
)

const ProjectDetails = ({ project, ...props }) => (
  <Content
    {...props}
    display={['flex', 'grid']}
    flexDirection="column"
    bg={project.frontmatter.color}
    overflow="hidden"
    py={100}
  >
    <Cell
      gridColumn="1"
      flexDirection="column"
      height={['initial', '66%']}
      mr={[0, 4]}
    >
      <Text children={project.frontmatter.title} />
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
