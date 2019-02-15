import { graphql } from 'gatsby'

export const ImageSharp = graphql`
  fragment ProjectImage on File {
    childImageSharp {
      fluid(maxWidth: 1024, quality: 90) {
        src
      }
    }
  }
`
