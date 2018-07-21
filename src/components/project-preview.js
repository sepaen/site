import React from 'react'

import Content from './content'
import Cell from '../system/cell'
import Text from '../system/text'
import Image from '../system/image'
import Link from '../system/link'

const ProjectPreview = ({ project, ...props }) => (
  <Content {...props} id={'anchor-' + project.frontmatter.slug}>
    <Cell gridColumn="1" flexDirection="column" mr={4}>
      <Text children={project.frontmatter.title} />
      <Text children={project.frontmatter.description} />
    </Cell>

    <Cell gridColumn="2/6" justify="center" align="flex-start">
      <Link to={`/projects/${project.frontmatter.slug}`}>
        <Image
          src={project.frontmatter.images[1].publicURL}
          maxWidth="100%"
          maxHeight="100%"
        />
      </Link>
    </Cell>
  </Content>
)

export default ProjectPreview
