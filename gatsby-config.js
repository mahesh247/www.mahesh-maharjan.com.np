module.exports = {
  siteMetadata: {
    title: `Mahesh Maharjan`,
    name: `Mahesh Maharjan`,
    siteUrl: `https://www.mahesh-maharjan.com.np`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Welcome to Novela, the simplest way to start publishing with Gatsby.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/me.mahesh247`,
      },
      {
        name: `github`,
        url: `https://github.com/mahesh247`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/me.mahesh247`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/mahesh247`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/mahesh247`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
