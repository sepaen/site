import React from 'react'
import styled from 'styled-components'
import Flex from '../system/flex'

const CursorFlex = styled(Flex)`
  ::before {
    content: '${p => p.content}'
  }
`

class Cursor extends React.Component {
  static defaultProps = {
    render: () => null,
  }

  state = {
    x: 0,
    y: 0,
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.updatePosition)
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.updatePosition)
  }

  updatePosition = e => {
    this.setState({
      x: e.pageX,
      y: e.pageY,
    })
  }

  render() {
    const { render, ...props } = this.props
    const { x, y } = this.state

    const content = render({ ...props, x, y })

    return !content ? null : (
      <CursorFlex
        {...props}
        content={content}
        style={{ top: y - 25, left: x - 25 }}
        display={['none', 'flex']}
        color="#fff !important"
        position="fixed"
        width={50}
        height={50}
        justifyContent="center"
        alignItems="center"
        userSelect="none"
        willChange="top, left"
      />
    )
  }
}

export default Cursor
