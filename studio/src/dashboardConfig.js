export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6291fa3227be7e619bf79ffe",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-tkn46cd3",
                  apiId: "b20beda0-5a1f-402b-baec-a77e1cf07c29",
                },
                {
                  buildHookId: "6291fa3327be7e60e5f7a290",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ro7puzvp",
                  apiId: "d9109077-35a4-4535-9598-26d3bc4c72b0",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/kaleemullahdev/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ro7puzvp.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
