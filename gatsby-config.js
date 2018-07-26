module.exports = {
  siteMetadata: {
    title: 'Bureau Sepän',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        enableIdentityWidget: true,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    'gatsby-transformer-remark',
  ],
}
