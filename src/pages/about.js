import React from 'react'
import { graphql } from 'gatsby'
import addToMailChimp from 'gatsby-plugin-mailchimp'

import Layout from '../components/layout'
import Content from '../components/content'
import Cell from '../system/cell'
import Markdown from '../system/markdown'
import Text from '../system/text'
import Box from '../system/box'
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

const AboutCell = Cell.with({
  flexDirection: 'column',
  fontSize: 18,

  desktop: {
    fontSize: 24
  }
})

const Subscribe = Text.with({
  display: 'inline',
  textDecoration: 'underline',
  cursor: 'pointer'
})

const SubscribeBox = Box.with({
  alignItems: 'center',
  transition: 'opacity 0.3s ease-in-out'
})

const SubscribeInput = Input.with({
  type: 'email',
  placeholder: 'Enteryour email here'
})

const SubscribeSubmit = Text.with({
  children: 'Subscribe',
  fontSize: 16
})

class AboutPage extends React.Component {
  state = {
    subscribing: false,
    email: ''
  }

  changeEmail = e => {
    this.setState({ email: e.target.value })
  }

  toggleSubscribe = () => {
    this.setState({ subscribing: !this.state.subscribing })
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
      <Layout title={data.site.siteMetadata.title} bg="gold">
        <Content pb={1}>
          <AboutCell>
            <Markdown html={data.markdownRemark.html} mb={4} />

            <Text display="inline">
              Keep up to date by
              <Subscribe
                children="subscribing to our newsletter"
                onClick={this.toggleSubscribe}
                ml={1}
              />
            </Text>

            <SubscribeBox opacity={subscribing ? 1 : 0} mt={4}>
              <SubscribeInput
                value={email}
                onChange={this.changeEmail}
                cursor={subscribing ? 'initial' : 'default'}
                mr={1}
              />
              <SubscribeSubmit
                onClick={this.subscribe}
                cursor={subscribing ? 'pointer' : 'default'}
              />
            </SubscribeBox>
          </AboutCell>
        </Content>
      </Layout>
    )
  }
}

export default AboutPage
