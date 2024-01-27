export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4";
export type GridItemType = "social" | "project" | "skills";

export type SkillsItem = {
  title: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  category?: string;
  tech?: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonLink?: string;
  /* skilss */
  skills?: SkillsItem[];
  image?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "Youtube",
    icon: "youtube",
    username: "@Ahmad Azis",
    description:
      "Hi, I'm an enthusiastic web developer proficient in full-stack JavaScript, dedicated to enhancing your projects. I specialize in crafting modern, responsive websites and am open to feedback, eager to contribute my creativity to your team's success.",
    color: "#FF0000",
    buttonTitle: "Subscribe",
    buttonLink: "https://youtube.com/@ahmadazizs",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Dribble",
    icon: "dribble",
    username: "@Ahmad Aziz",
    buttonTitle: "Follow",
    buttonLink: "https://dribbble.com/kkenzumi",
    color: "#5865F2",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Github",
    icon: "github",
    username: "@batuhanbilginn",
    buttonTitle: "Follow",
    buttonLink: "https://github.com/Kulicoding28",
    color: "#070707",
  },
  {
    layout: "2x4",
    type: "skills",
    title: "Skills",
    image: "/equipments-image.jpeg",
    skills: [
      {
        title: "Javascript",
      },
      {
        title: "React",
      },
      {
        title: "NextJs",
      },
      {
        title: "Prisma",
      },
      {
        title: "Html",
      },
      {
        title: "Css",
      },
      {
        title: "tailwind css",
      },
    ],
  },
  {
    layout: "2x2",
    type: "social",
    title: "Tiktok",
    icon: "tiktok",
    username: "@Gibahtech",
    buttonTitle: "Follow",
    buttonLink: "https://www.tiktok.com/@gibahtech",
    color: "#070707",
    description: "shering about programming, web ai and ui design",
  },
  {
    type: "project",
    category: "fullstack Javascript",
    tech: "Nextjs prisma planetscale clerk tailwind",
    title: "warung web store",
    image: "/warungweb.png",
    layout: "1x2",
    buttonLink: "https://github.com/Kulicoding28/warungweb-store",
  },
  {
    layout: "1x2",
    type: "project",
    category: "fullstack Javascript",
    tech: "Nextjs prisma planetscale clerk tailwind",
    title: "Dashboard warung web fullstack",
    image: "/warungwebdb.png",
    buttonLink: "https://github.com/Kulicoding28/warung-web",
  },
  {
    layout: "1x2",
    type: "project",
    category: "fullstack Javascript",
    tech: "Nextjs strapi tailwind",
    title: "Go-Blogs fullstack",
    image: "/blogs.png",
    buttonLink: "https://github.com/Kulicoding28/Goblogs",
  },
  {
    layout: "1x2",
    type: "project",
    category: "Landing page",
    tech: "Astro Tailwind",
    title: "Mandiri Kusen Freelance",
    image: "/mandirikusen.png",
    buttonLink: "https://github.com/Kulicoding28/mandirikusen",
  },

  {
    layout: "2x1",
    type: "project",
    category: "Tamplate Project Npm Package",
    tech: "Exprees Node etc",
    title: "Gibahtech CLI tamplate projects",
    icon: "superpeer",
    buttonLink: "https://socket.dev/npm/package/gibahtech",
  },
  // {
  //   layout: "2x1",
  //   type: "project",
  //   title: "makrAI",
  //   icon: "github",
  //   color: "#070707",
  //   buttonLink: "https://socket.dev/npm/package/gibahtech",
  // },
  // {
  //   layout: "2x2",
  //   type: "social",
  //   title: "Full-stack Multilingual Blog with Next.js 13",
  //   username: "@batuhanbilginn",
  //   description:
  //     "Learn how to build a full-stack, multilingual and high performant blog website with Next.js 13.4 and Directus.",
  //   icon: "udemy",
  //   buttonTitle: "Enroll",
  //   buttonLink:
  //     "https://www.udemy.com/course/nextjs13-fullstack-blog-seo-internationalization/?couponCode=MAKRDEVFELLOWS2",
  // },
  // {
  //   layout: "2x1",
  //   type: "project",
  //   title: "AI Blog Post Generator",
  //   icon: "github",
  //   color: "#070707",
  //   buttonLink: "https://github.com/batuhanbilginn/ai-blog-post-generator",
  // },
];

export const siteConfig = {
  creator: "Ahmad Aziz",
  title: "Junior Web Developper",
  bio: "Freelance Web Developper",
  location: "Depok, West Java",
  locationLink:
    "https://www.google.com/maps/place/Kota+Depok,+Jawa+Barat/@-6.3876714,106.7353947,12z/data=!3m1!4b1!4m6!3m5!1s0x2e69e95620a297d3:0x1cfd4042316fb217!8m2!3d-6.4024844!4d106.7942405!16zL20vMDMyd2s0?entry=ttu",
  email: "ahmadabdulaziz380@gmail.com",
  items: GridItems,
} as const;
