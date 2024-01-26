export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4";
export type GridItemType = "social" | "project" | "skills";

export type SkillsItem = {
  title: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
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
    layout: "1x2",
    type: "project",
    title: "warung web store fullstack",
    image: "/warungweb.png",
    // buttonLink: "https://superpeer.com/makrdev/-/nextjs-mentor",
  },
  {
    layout: "1x2",
    type: "project",
    title: "Dashboard warung web fullstack",
    image: "/warungwebdb.png",
    // buttonLink: "https://superpeer.com/makrdev/-/nextjs-mentor",
  },
  {
    layout: "1x2",
    type: "project",
    title: "Go-Blogs fullstack",
    image: "/blogs.png",
    // buttonLink: "https://superpeer.com/makrdev/-/nextjs-mentor",
  },
  {
    layout: "1x2",
    type: "project",
    title: "Mandiri Kusen Freelance",
    image: "/mandirikusen.png",
    // buttonLink: "https://superpeer.com/makrdev/-/nextjs-mentor",
  },

  {
    layout: "2x1",
    type: "project",
    title: "Gibahtech CLI tamplate projects",
    icon: "superpeer",
    buttonLink: "https://socket.dev/npm/package/gibahtech",
  },
  {
    layout: "2x1",
    type: "project",
    title: "makrAI",
    icon: "github",
    color: "#070707",
    buttonLink: "https://socket.dev/npm/package/gibahtech",
  },
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
    "https://www.google.com/maps/place/Kad%C4%B1k%C3%B6y%2F%C4%B0stanbul/@40.981133,29.063053,12z/data=!3m1!4b1!4m6!3m5!1s0x14cac790b17ba89d:0xd2d24ea0437a7ee2!8m2!3d40.981867!4d29.0576302!16zL20vMDV5cWY4?entry=ttu",
  email: "ahmadabdulaziz380@gmail.com",
  items: GridItems,
} as const;
