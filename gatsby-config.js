module.exports = {
  siteMetadata: {
    title: `Filip Solovjev Portfolio`,
    name: `Filip Solovjev`,
    siteUrl: `https://filipsolo.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Welcome to my</br>projects page.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `mailto`,
        url: `mailto:filip.solovjev@gmail.com`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/narative/`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/narative.co`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/narativestudio`,
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
        authorsPage: false,
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
    // {
    //   resolve: `gatsby-plugin-netlify-cms`,
    //   options: {
    //   },
    // },
  ],
};
