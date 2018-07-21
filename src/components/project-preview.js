import React from 'react'

import Content from './content'
import Cell from '../system/cell'
import Text from '../system/text'
import Image from '../system/image'
import Link from '../system/link'

const ProjectPreview = ({ project, ...props }) => (
  <Content {...props} id={'anchor-' + project.frontmatter.slug}>
    <Cell gridColumn="1" flexDirection="column" height="66%" mr={4}>
      <Text children={project.frontmatter.title} />
      <Text children={project.frontmatter.description} />
    </Cell>

    <Cell
      gridColumn="2/6"
      position="relative"
      height="100%"
    >
      <Link
        to={`/projects/${project.frontmatter.slug}`}
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
        p={15}
      >
        <Image
          src={project.frontmatter.images[0].publicURL}
          maxWidth="100%"
          maxHeight="100%"
        />
      </Link>
    </Cell>
  </Content>
)

export default ProjectPreview
