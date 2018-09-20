module.exports = {
  siteMetadata: {
    title: 'React+D3v5 by Swizec Teller',
    description:
      'Learn how to build gorgeous re-usable visualization components using modern JavaScript in about an hour.',
    url: 'https://swizec.com/reactd3js/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-mdx',
  ],
}
