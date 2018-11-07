import React from 'react'

import Gallery from './gallery'
import Content from './content'
import Cell from '../system/cell'
import Flex from '../system/flex'
import Text from '../system/text'
import Image from '../system/image'
import Markdown from '../system/markdown'

function getDescription(project) {
  let [details, description] = project.html.split('<hr>')

  if (!description) {
    description = details
    details = null
  }

  return [details, description]
}

const ProjectDescription = ({ project, ...props }) => {
  const [details, description] = getDescription(project)

  return (
    <Flex
      {...props}
      flexDirection={['column', 'row']}
      zIndex={[1, 100]}
      bg={project.frontmatter.color}
      cursor="initial"
      p={[0, 20]}
    >
      {details && <Markdown html={details} mr={[0, 20]} mb={[40, 0]} />}
      <Markdown html={description} maxWidth={500} textAlign="justify" />
    </Flex>
  )
}

class ProjectDetails extends React.Component {
  state = {
    entered: false,
  }

  componentDidMount() {
    setTimeout(() => this.setState({ entered: true }), 600)
  }

  render() {
    const { project, ...props } = this.props
    const { entered } = this.state

    return (
      <Content
        {...props}
        display={['flex', 'grid']}
        flexDirection="column"
        bg={project.frontmatter.color}
        overflow="hidden"
        pt={[80, 20]}
      >
        <Cell
          gridColumn="1"
          flexDirection="column"
          opacity={[1, entered ? 1 : 0]}
          transition="opacity 500ms ease-in-out"
          mt={[0, 130]}
          mr={[0, 4]}
        >
          <Text whiteSpace="pre-wrap">
            {project.frontmatter.fulltitle || project.frontmatter.title}
            {project.frontmatter.subtitle}
          </Text>
        </Cell>

        <Gallery is={Cell} pt={4} pb={50}>
          {project.fields.images.map(
            ({ childImageSharp: image }) =>
              image && (
                <Image
                  key={image.fluid.src}
                  src={image.fluid.src}
                  maxWidth="100%"
                  maxHeight="100%"
                />
              )
          )}

          <ProjectDescription project={project} />
        </Gallery>
      </Content>
    )
  }
}

export default ProjectDetails
