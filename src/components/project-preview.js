import React from 'react'
import { navigate } from 'gatsby'

import extractSlug from '../utils/extract-slug'
import winHeight from '../utils/win-height'
import Content from './content'
import Cursor from './cursor'
import Flex from '../system/flex'
import Cell from '../system/cell'
import Text from '../system/text'
import Image from '../system/image'

const EXIT_DURATION = 500

class ProjectPreview extends React.Component {
  state = {
    exiting: false,
  }

  showProject = () => {
    const slug = extractSlug(this.props.project)
    this.setState({ exiting: true })
    setTimeout(() => navigate(`/projects/${slug}`), EXIT_DURATION)
  }

  getCursorText = ({ y }) => {
    if (y < 60 || y > winHeight() - 60) {
      return null
    } else {
      return 'Dive'
    }
  }

  getCover() {
    const { cover, images } = this.props.project.fields
    const actualCover = cover || images[0]

    return actualCover.childImageSharp.fluid.src
  }

  render() {
    const { project, ...props } = this.props
    const { exiting } = this.state

    return (
      <Flex flex="1 0 100%" bg={project.frontmatter.color} cursor="none">
        <Content
          {...props}
          display={['flex', 'grid']}
          flexDirection="column"
          opacity={exiting ? 0 : 1}
          transition={`opacity ${EXIT_DURATION}ms ease-out`}
          pt={[80, 20]}
          pb={[120, 20]}
        >
          <Cell
            gridColumn="1"
            flexDirection="column"
            mt={[0, 130]}
            mr={[0, 4]}
            mb={4}
          >
            <Text whiteSpace="pre-wrap">
              {project.frontmatter.fulltitle || project.frontmatter.title}
              {project.frontmatter.subtitle}
            </Text>
          </Cell>

          <Cell
            gridColumn={['1', '2/6']}
            flex={1}
            position="relative"
            height="100%"
          >
            <Flex
              onClick={this.showProject}
              position="absolute"
              top={0}
              left={0}
              width="100%"
              height="100%"
              justifyContent="center"
              alignItems={['flex-start', 'center']}
              p={[0, 30]}
            >
              <Image src={this.getCover()} maxWidth="100%" maxHeight="100%" />
            </Flex>
          </Cell>
        </Content>

        <Cursor
          is={Text}
          onClick={this.showProject}
          render={this.getCursorText}
          mixBlendMode="difference"
        />
      </Flex>
    )
  }
}

export default ProjectPreview
