module.exports = {
  siteMetadata: {
    title: `Orkiestra Goleszyn`,
    description: `Jesteśmy zespołem który przez ponad 70lat dzięki swojej pasji i zangażowaniu tworzą wyjątkowy zespół z niesamowitą atmosferą`,
    author: `Orkiestra Goleszyn`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Kalam', 'cursive']
        }
      }
    },
    {
      resolve: "gatsby-source-graphql",
          options: {
          typeName: "GCMS",
          fieldName: "gcms",
          url: "https://api-euwest.graphcms.com/v1/cjtwruh9q7h4201cjqcmsfn16/master",
      },
  },

    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
