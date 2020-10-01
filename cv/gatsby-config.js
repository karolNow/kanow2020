module.exports = {
  siteMetadata: {
    title: `KN`,
    description: `Karol Nowak, portfolio`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
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
        icon: `src/images/KNLOGO.png`, // This path is relative to the root of the site.
      },
    }, 
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [{
              family: `Lato`,
              subsets: [`latin-ext`],
              variants: [`300`,`400`],
            },
            {
              family: `Open Sans`,
              variants: [`400`, `700`]
            }, 
            {
              family: `DM Serif Display`,
              variants: [`400`]
            }, 
          ],
        },
      },
      {
        resolve: "gatsby-plugin-google-tagmanager",
        options: {
          id: "GTM-N8PRTPS",
          // Include GTM in development.
          //
          // Defaults to false meaning GTM will only be loaded in production.
          includeInDevelopment: true,

          // datalayer to be set before GTM is loaded
          // should be an object or a function that is executed in the browser
          //
          // Defaults to null
          defaultDataLayer: {
            platform: "gatsby"
          },
          // Name of the event that is triggered
          // on every Gatsby route change.
          //
          // Defaults to gatsby-route-change
          routeChangeEventName: "gatsby-route-change",
        },
      },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

