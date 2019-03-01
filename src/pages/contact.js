import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Content from '../components/content'
import Cell from '../system/cell'
import Text from '../system/text'
import Link from '../system/link'
import Box from '../system/box'

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

const Column = Box.with({ flexDirection: 'column', mb: 4 })

const fontSize = { fontSize: 24, desktop: { fontSize: 32 } }

const ContactPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const contact = data.markdownRemark.frontmatter

  return (
    <Layout title={siteTitle} bg="gold">
      <Content>
        <Cell flexDirection="column" {...fontSize}>
          <Column>
            <Text children={contact.title} />
            <Link href={`mailto:${contact.email}`} children={contact.email} />
          </Column>

          <Column>
            {contact.phone.map(({ number }, i) => (
              <Text key={i} children={number} />
            ))}
          </Column>

          <Column>
            {contact.social.map(({ platform, url }, i) => (
              <Link key={i} href={url} target="blank" children={platform} />
            ))}
          </Column>

          <Link to="/jobs" children="Jobs" />
        </Cell>
      </Content>
    </Layout>
  )
}

export default ContactPage
