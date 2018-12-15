import React from 'react'
import { navigate } from 'gatsby'

import extractSlug from '../utils/extract-slug'
import winHeight from '../utils/win-height'
import Content from './content'
import Cursor from './cursor'
import Box from '../system/box'
import Cell from '../system/cell'
import Text from '../system/text'
import Image from '../system/image'

const EXIT_DURATION = 500

const ProjectBox = Box.extend({
  flex: '1 0 100%',
  cursor: 'none'
})

const ProjectContent = Content.extend({
  display: ['flex', 'grid'],
  flexDirection: 'column',
  transition: `opacity ${EXIT_DURATION}ms ease-out`,
  pt: [10, 2],
  pb: [2, 2]
})

const ProjectSummary = Cell.extend({
  gridColumn: 1,
  flexDirection: 'column'
})

const ProjectCoverCell = Cell.extend({
  gridColumn: [1, '2/6'],
  flex: 1,
  position: 'relative',
  height: '100%'
})

const ProjectCoverBox = Box.extend({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: ['flex-start', 'center'],
  p: [0, 4]
})

const ProjectCover = Image.extend({
  maxWidth: '100%',
  maxHeight: '100%'
})

class ProjectPreview extends React.Component {
  state = {
    exiting: false
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
      <ProjectBox bg={project.frontmatter.color}>
        <ProjectContent {...props} opacity={exiting ? 0 : 1}>
          <ProjectSummary mt={[0, 16]} mr={[0, 4]} mb={4}>
            <Text whiteSpace="pre-wrap">
              {project.frontmatter.fulltitle || project.frontmatter.title}
              {project.frontmatter.subtitle}
            </Text>
          </ProjectSummary>

          <ProjectCoverCell>
            <ProjectCoverBox onClick={this.showProject}>
              <ProjectCover src={this.getCover()} />
            </ProjectCoverBox>
          </ProjectCoverCell>
        </ProjectContent>

        <Cursor onClick={this.showProject} render={this.getCursorText} />
      </ProjectBox>
    )
  }
}

export default ProjectPreview
