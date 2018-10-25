import React from 'react'

function matchMedia(breakpoint) {
  return typeof window !== 'undefined'
    ? window.matchMedia(`screen and (min-width: ${breakpoint})`).matches
    : true
}

function withMediaQuery(Component) {
  return class MediaQuery extends React.Component {
    static defaultProps = {
      breakpoint: '40em',
    }

    state = {
      isDesktop: matchMedia(this.props.breakpoint),
    }

    render() {
      return <Component {...this.props} isDesktop={this.state.isDesktop} />
    }
  }
}

export default withMediaQuery
