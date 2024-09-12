export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "PatientPulse - Patient Management App",
    desc: "A streamlined patient management app that simplifies and enhances the processes of scheduling, tracking, and managing patient information, making these tasks more efficient and user-friendly for healthcare providers.",
    subdesc:
      "Developed as an innovative patient management platform using Next.js, Tailwind CSS, React, and Appwrite, PatientPulse streamlines appointment scheduling, doctor registration, and admin management for an efficient healthcare experience.",
    href: "https://patient-pulse.vercel.app/",
    texture: "/textures/project/project1.jpg",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Payzen - Banking App",
    desc: "A robust Banking App designed for secure user authentication, multi-account management, and efficient transaction handling, including deposits, withdrawals, and transfers, with real-time balance updates and detailed transaction history.",
    subdesc:
      "Engineered as a seamless payment solution using React, Tailwind CSS, and Plaid API, Payzen enables secure and efficient transactions, offering an intuitive interface for managing transfers between accounts.",
    href: "https://payzen-bank.vercel.app/",
    texture: "/textures/project/project2.jpg",
    logo: "/assets/project-logo6.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Task Managment App",
    desc: "An intuitive Task Management App built with React, featuring seamless task creation, updating, and deletion. It allows tasks to be categorized by importance and completion status, with secure user authentication via Firebase and a clean interface using Ant Design.",
    subdesc:
      "Developed as a robust task management solution using React.js, TypeScript, Ant Design, and Firebase Auth, this app provides secure authentication and a sleek interface for efficiently managing tasks and boosting productivity.",
    href: "https://taskflowmanagement.netlify.app/",
    texture: "/textures/project/project3.jpg",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Pabau Clinic Software",
    pos: "Software Developer",
    duration: "Sep 2023 - Apr 2024",
    title:
      "At Pabau Clinic Software, I worked as a Software Developer, focusing on front-end development with React and TypeScript. I contributed to building user-friendly interfaces and improving the user experience for clinic management software.",
    icon: "/assets/pabau.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "OCA Solutions",
    pos: "Front-end Developer",
    duration: "Mar 2023 - Sep 2023",
    title:
      "As a Front-end Developer at OCA Solutions, I implemented responsive web designs using React, enhancing the usability and performance of client applications.",
    icon: "/assets/oca.png",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Freelance",
    pos: "Front-end Developer",
    duration: "Jun 2022 - Mar 2023",
    title:
      "During my freelance work, I built and maintained web applications for various clients, leveraging technologies like HTML, CSS, JavaScript, and React to deliver high-quality solutions.",
    icon: "/assets/upwork.png",
    animation: "salute",
  },
];
