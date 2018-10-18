import React from 'react'

import extractSlug from '../utils/extract-slug'
import breakLines from '../utils/break-line'
import Content from './content'
import Cell from '../system/cell'
import Text from '../system/text'
import Image from '../system/image'
import Link from '../system/link'

const ProjectPreview = ({ project, ...props }) => (
  <Content
    {...props}
    gridTemplateRows={['1fr 2fr', 'initial']}
    bg={project.frontmatter.color}
    py={[80, 20]}
  >
    <Cell gridColumn="1" flexDirection="column" mt={[0, 130]} mr={[0, 4]}>
      {breakLines(
        project.frontmatter.fulltitle || project.frontmatter.title,
        line => (
          <Text key={line} children={line} />
        )
      )}
      {breakLines(project.frontmatter.subtitle, line => (
        <Text key={line} children={line} />
      ))}
    </Cell>

    <Cell gridColumn={['1', '2/6']} flex={1} position="relative" height="100%">
      <Link
        to={`/projects/${extractSlug(project)}`}
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems={['flex-start', 'center']}
        p={[0, 30]}
      >
        <Image
          src={project.fields.images[0].childImageSharp.fluid.src}
          maxWidth="100%"
          maxHeight="100%"
        />
      </Link>
    </Cell>
  </Content>
)

export default ProjectPreview
