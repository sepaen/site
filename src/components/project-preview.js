import React from 'react'

import Content from './content'
import Flex from '../system/flex'
import Cell from '../system/cell'
import Text from '../system/text'
import Image from '../system/image'

const ProjectPreview = ({ project, ...props }) => (
  <Flex
    {...props}
    id={'anchor-' + project.frontmatter.slug}
    flex="0 0 100%"
    alignItems="center"
    p={20}
  >
    <Content height="66%">
      <Cell gridColumn="1" flexDirection="column" mr={4}>
        <Text children={project.frontmatter.title} />
        <Text children={project.frontmatter.description} />
      </Cell>

      <Cell gridColumn="2/6" justify="center" align="flex-start">
        <Image
          src={project.frontmatter.images[1].publicURL}
          maxWidth="100%"
          maxHeight="100%"
        />
      </Cell>
    </Content>
  </Flex>
)

export default ProjectPreview
