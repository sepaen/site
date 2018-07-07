import React from 'react'
import path from 'path'

import Content from './content'
import Flex from '../system/flex'
import Cell from '../system/cell'
import Text from '../system/text'
import Link from '../system/link'
import Image from '../system/image'

const ProjectPreview = ({ project }) => (
  <Flex flex={1} align="center">
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
