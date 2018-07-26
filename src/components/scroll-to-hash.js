import React from 'react'
import get from 'lodash/get'
import debounce from 'lodash/debounce'
import Flex from '../system/flex'

function findAncestor(el, className) {
  while (!el.classList.contains(className) && (el = el.parentElement)) {
    continue
  }

  return el
}

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
