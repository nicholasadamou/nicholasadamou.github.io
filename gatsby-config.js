/* eslint-disable global-require */
require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: 'Nicholas Adamou',
    description:
      'Nicholas Adamou - He is a web developer, and an open source contributor.',
    author: 'Nicholas Adamou',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nicholas Adamou`,
        short_name: `Nicholas Adamou - He is a web developer, and an open source contributor.`,
        start_url: `/`,
        background_color: `#FAFAFA`,
        theme_color: `#FAFAFA`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_TRACKING_ID,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('node-sass'),
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    'gatsby-plugin-netlify',
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ['GITHUB_TOKEN', 'GOOGLE_TRACKING_ID'],
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      },
    },
  ],
};
