module.exports = {
  siteMetadata: {
    title: 'Bureau Sepän',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        enableIdentityWidget: true,
        modulePath: `${__dirname}/src/cms/cms.js`,
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
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://sepaen.us19.list-manage.com/subscribe/post?u=54fc48fc9d2ce1f45f4df99fd&amp;id=6bdb48c285', // see instructions section below
      },
    },
  ],
}
