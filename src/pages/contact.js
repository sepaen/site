import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Content from '../components/content'
import Cell from '../system/cell'
import Text from '../system/text'
import Link from '../system/link'
import Flex from '../system/flex'
import withProps from '../utils/with-props'
import { gold } from '../system/colors'

export const query = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
      }
    }

    markdownRemark(frontmatter: { type: { eq: "contact" } }) {
      frontmatter {
        title
        email
        phone {
          number
        }
        social {
          platform
          url
        }
      }
    }
  }
`

const Col = withProps(Flex, { flexDirection: 'column', mb: 4 })

const ContactPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const contact = data.markdownRemark.frontmatter

  return (
    <Layout title={siteTitle} bg={gold}>
      <Content>
        <Cell flexDirection="column" fontSize={[24, 32]}>
          <Col>
            <Text children={contact.title} />
            <Link href={`mailto:${contact.email}`} children={contact.email} />
          </Col>

          <Col>
            {contact.phone.map(({ number }, i) => (
              <Text key={i} children={number} />
            ))}
          </Col>

          <Col>
            {contact.social.map(({ platform, url }, i) => (
              <Link key={i} href={url} target="blank" children={platform} />
            ))}
          </Col>

          <Link to="/jobs" children="Jobs" />
        </Cell>
      </Content>
    </Layout>
  )
}

export default ContactPage
