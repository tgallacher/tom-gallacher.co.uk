module.exports = {
  siteMetadata: {
    title: `tom-gallacher.co.uk`,
    description: `WIP`,
    author: `@tgallacher`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-typescript',
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/speaking.yml`,
        name: `speaking`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/workshops.yml`,
        name: `workshops`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-force-trailing-slashes`
  ]
};
