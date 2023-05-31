import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  docker,
  github,
  linkedin,
  az104,
  az900,
  pl400,
  ms70480,
  csharp,
  dotnet,
  sql,
  sqlserver,
  postgre,
  angular,
  vue,
  azure,
  xcode,
  workai,
  ttms,
  politechnika,
  portfolio,
  checkflix,
} from "../assets";
import { ExperienceCardPropType } from "../components/Experience";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: ".NET Core",
    icon: dotnet,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "SQL Server",
    icon: sqlserver,
  },
  {
    name: "PostgreSQL",
    icon: postgre,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React.js",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Vue",
    icon: vue,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: "placeholder",
  },
  {
    name: "REST API",
    icon: "placeholder",
  },
  {
    name: "SOAP",
    icon: "placeholder",
  },
  {
    name: "git",
    icon: "placeholder",
  },
  {
    name: "Sass",
    icon: "placeholder",
  },
  {
    name: "Tailwind CSS",
    icon: "placeholder",
  },
  {
    name: "Bootstrap",
    icon: "placeholder",
  },
  {
    name: "MUI",
    icon: "tailwind",
  },
];

const experiences: ExperienceCardPropType[] = [
  {
    title: "Full-stack .NET Developer",
    company_name: "X-Code",
    icon: xcode,
    iconBg: "#ffffff",
    date: "July 2020 - October 2021",
    points: [
      "Working with: C#, JavaScript, TypeScript, SQL, MSSQL, RabbitMQ, SOAP, Microsoft Dynamics, ODATA, TeamCity.",
      "Maintenance of existing system, developing new functionalities and bug fixing.",
      "Collaborating with cross-functional teams including testers, business analyst, product managers, and other developers to create high-quality products.",
      "Implementing and integration with SOAP web services.",
      "Contact with SAP client.",
      "Maintenance of on-premise production software.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Bialystok University of Technology",
    company_name: "Faculty: Computer Science",
    icon: politechnika,
    iconBg: "#ffffff",
    date: "2021",
    points: [
      "Specialty: Software engineering",
      "Bachelor of Engineering",
      "Grade: 5"
    ],
  },
  {
    title: "Full-stack .NET Developer",
    company_name: "workai",
    icon: workai,
    iconBg: "#ffce33",
    date: "October 2021 - September 2022",
    points: [
      "Working with: C#, JavaScript, TypeScript, AngularJS, Vue.js, jQuery, ASP.NET Core MVC, Entity Framework, REST API, MSSQL, Hangfire, Orchard Core, ODATA, Azure.",
      "Maintenance of existing system, developing new functionalities and bug fixing.",
      "Collaborating with cross-functional teams including testers, designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Implementing and maintaining REST API microservices.",
      "Maintenance of Azure cloud production software.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Bialystok University of Technology",
    company_name: "Faculty: Computer Science",
    icon: politechnika,
    iconBg: "#ffffff",
    date: "2022",
    points: [
      "Specialty: Intelligent web technologies",
      "Master of Engineering",
      "Grade: 6"
    ],
  },
  {
    title: "Full-stack .NET Developer",
    company_name: "Transition Technologies MS",
    icon: ttms,
    iconBg: "#0f0f0f",
    date: "October 2022 - now",
    points: [
      "Working with: C#, JavaScript, React, jQuery, ASP.NET Core MVC, Entity Framework, REST API, PostgreSQL, Docker, Azure.",
      "Maintenance of existing system, developing new functionalities and bug fixing.",
      "Collaborating with cross-functional teams including testers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Wilczek DEV portfolio",
    description:
      "SPA developer portfolio.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/WiluGIT/wilugit-portfolio",
  },
  {
    name: "Checkflix",
    description:
      "Web application that aggregates streaming platform offers. It enables user to search, filter and mange cinematic productions. It also provides functionality of notification and user-following.",
    tags: [
      {
        name: ".NET Core",
        color: "blue-text-gradient",
      },
      {
        name: "Rest API",
        color: "green-text-gradient",
      },
      {
        name: "EF Core",
        color: "pink-text-gradient",
      },
      {
        name: "SQL Server",
        color: "blue-text-gradient",
      },
      {
        name: "IdentityServer",
        color: "green-text-gradient",
      },
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
    ],
    image: checkflix,
    source_code_link: "https://github.com/WiluGIT/Checkflix",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "",
  //   source_code_link: "https://github.com/",
  // },
];

const socialIcons = [
  {
    icon: linkedin,
    title: 'LinkedIn',
    link: 'https://pl.linkedin.com/in/konrad-wilczek-9b100a208'
  },
  {
    icon: github,
    title: 'GitHub',
    link: 'https://github.com/WiluGIT'
  },
]

const certificates = [
  {
    title: 'AZ-104 Microsoft Certified:',
    subtitle: 'Azure Administrator Associate',
    icon: az104,
  },
  {
    title: 'AZ-900 Microsoft Certified:',
    subtitle: 'Azure Fundamentals',
    icon: az900,
  },
  {
    title: 'PL-400 Microsoft Certified:',
    subtitle: 'Power Platform Developer Associate',
    icon: pl400,
  },
  {
    title: 'MS 70-480 Microsoft Certified:',
    subtitle: 'Programming in HTML5 with JavaScript and CSS3',
    icon: ms70480,
  }
]

const LoaderStyles = {
  container: {
    background: 'linear-gradient(270deg, #2f122e, #020016)',
    fontSize: '30px',
  },
  bar: {
    background: 'linear-gradient(270deg, #770bed, #f5af19)',
    height: 6,
  },
  data: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}

export { certificates, technologies, experiences, projects, socialIcons, LoaderStyles };
