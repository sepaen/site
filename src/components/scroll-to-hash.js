import React from 'react'
import get from 'lodash/get'
import Flex from '../system/flex'

class ScrollToHash extends React.Component {
  componentDidMount() {
    this.scrollToHash()
  }

  componentDidUpdate(prevProps) {
    const hash = get(this.props, 'location.hash')
    const prevHash = get(prevProps, 'location.hash')

    if (hash && hash !== prevHash) {
      this.scrollToHash({ behavior: 'smooth' })
    }
  }

  scrollToHash(options) {
    const hash = get(this.props, 'location.hash', '')
    const node = document.getElementById(`anchor-${hash.slice(1)}`)

    if (node) {
      node.scrollIntoView(options)
    }
  }

  render() {
    return <Flex {...this.props} flexDirection="column" height="100%" />
  }
}

export default ScrollToHash
