import React from 'react'
import { graphql } from 'gatsby'

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
  }

  render() {
    const { data } = this.props
    const { subscribing, email } = this.state

    return (
      <Layout title={data.site.siteMetadata.title}>
        <Content bg={gold} alignItems={['flex-start', 'center']} pt={[60, 0]}>
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

            {subscribing && (
              <Flex alignItems="center" mt={32}>
                <Input
                  value={email}
                  placeholder="Enter your email here"
                  onChange={e => this.setState({ email: e.target.value })}
                  mr={10}
                />
                <Text
                  children="Subscribe"
                  onClick={this.subscribe}
                  fontSize={16}
                  cursor="pointer"
                />
              </Flex>
            )}
          </Cell>
        </Content>
      </Layout>
    )
  }
}

export default AboutPage
