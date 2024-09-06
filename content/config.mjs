
/**
 * @type {import("../config/siteConfig").UserConfig}
 */
const config = {
    title: "📚 Curiosity Chronicles",
    description: "These are my published Obsidian notes on a range of topics that I find interesting or cool",
    author: "Mohan",
    domain: "https://mohan.is-a.dev/",
    // search: {
    //   provider: "kbar",
    // },
    showComments: true,
    showSidebar: true,
    showLinkPreviews: true,    
    comments: {
      provider: "giscus",
      config: {
        repo: "mohankumarpaluru/curiosity-chronicles",
        repositoryId: "R_kgDOL9hH7A",
        category: "Announcements",
        categoryId: "DIC_kwDOL9hH7M4CiOPg",
      },
    },
    blogDir: "Development",
    // links to the pages you want to link to in the navbar and in the footer
    navLinks: [
      { href: "/", name: "Home" },
      { href: "/About", name: "About" },
      { href: "/AI/Fundamentals/AI", name: "AI" }, // Assuming AI.md is the main page for AI
      { href: "/AWS/AWS", name: "AWS" }, // You might want to choose a key file or landing page
      ]};
  
  export default config;
