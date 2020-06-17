/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-source-filesystem'
      options: {
        name: 'pages',
        path: '${_dirname}/src/pages'
      },
    },
    {
      resolve: 'gatsby-source-filesystem'
      options: {
        name: 'post',
        path: '${_dirname}/src/post'
      },
    },
    {
      resolve: 'gatsby-source-filesystem'
      options: {
        name: 'images',
        path: '${_dirname}/src/images'
      },
    },
  ],
}
