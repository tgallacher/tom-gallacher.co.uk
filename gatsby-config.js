module.exports = {
  siteMetadata: {
    title: `tom-gallacher.co.uk`,
    description: `WIP`,
    author: `@tgallacher`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-force-trailing-slashes`
  ]
};
