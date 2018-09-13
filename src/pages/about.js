import React from 'react'
import { graphql } from 'gatsby'
import addToMailChimp from 'gatsby-plugin-mailchimp'

import Layout from '../components/layout'
import Content from '../components/content'
import Cell from '../system/cell'
import Markdown from '../system/markdown'
import Text from '../system/text'
import { gold } from '../system/colors'
import Flex from '../system/flex'
import Input from '../system/input'

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }

    markdownRemark(frontmatter: { type: { eq: "about" } }) {
      html
    }
  }
`

class AboutPage extends React.Component {
  state = {
    subscribing: false,
    email: '',
  }

  subscribe = () => {
    const { email } = this.state
    if (email) {
      addToMailChimp(email).then(() =>
        this.setState({ email: '', subscribing: false })
      )
    }
  }

  render() {
    const { data } = this.props
    const { subscribing, email } = this.state

    return (
      <Layout title={data.site.siteMetadata.title} bg={gold}>
        <Content pb={80}>
          <Cell flexDirection="column" fontSize={[18, 24]}>
            <Markdown html={data.markdownRemark.html} mb={4} />

            <Text display="inline">
              Keep up to date by
              <Text
                children="subscribing to our newsletter"
                onClick={() => this.setState({ subscribing: !subscribing })}
                display="inline"
                textDecoration="underline"
                cursor="pointer"
                ml={1}
              />
            </Text>

            <Flex
              alignItems="center"
              opacity={subscribing ? 1 : 0}
              transition="opacity 0.3s ease-in-out"
              mt={32}
            >
              <Input
                type="email"
                value={email}
                placeholder="Enter your email here"
                onChange={e => this.setState({ email: e.target.value })}
                cursor={subscribing ? 'initial' : 'default'}
                mr={10}
              />
              <Text
                children="Subscribe"
                onClick={this.subscribe}
                fontSize={16}
                cursor={subscribing ? 'pointer' : 'default'}
              />
            </Flex>
          </Cell>
        </Content>
      </Layout>
    )
  }
}

export default AboutPage
