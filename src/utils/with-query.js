import React from 'react'
import { StaticQuery } from 'gatsby'

function withQuery(query) {
  return Component => props => (
    <StaticQuery
      query={query}
      render={data => <Component {...props} data={data} />}
    />
  )
}

export default withQuery
