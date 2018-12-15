import React from 'react'
import omit from 'lodash/omit'

function matchMedia(breakpoint) {
  return typeof window !== 'undefined'
    ? window.matchMedia(`screen and (min-width: ${breakpoint})`).matches
    : true
}

function withMediaQuery(Component) {
  return class MediaQuery extends React.Component {
    static defaultProps = {
      breakpoint: '40em'
    }

    state = {
      isDesktop: matchMedia(this.props.breakpoint)
    }

    render() {
      return (
        <Component
          {...omit(this.props, 'breakpoint')}
          isDesktop={this.state.isDesktop}
        />
      )
    }
  }
}

export default withMediaQuery
