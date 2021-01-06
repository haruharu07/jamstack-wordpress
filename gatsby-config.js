require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Jamstack WordPress`,
    description: `Collaboration between Gatsby and WordPress.`,
    author: `Haru`,
    siteUrl:`https://jamstack-wp.netlify.app`,
  },
  plugins: [
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
        name: `Jamstack WordPress`,
        short_name: `JW`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/icon_site.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-remark-responsive-iframe`,
    {
        resolve: `gatsby-source-wordpress-experimental`,
        options: {
                url: process.env.WPGRAPHQL_URL,
                schema: {
                    typePrefix: `Wp`,
                    timeout: 600000,
                    perPage: 100,
                },
            },
    },
  ],
}
