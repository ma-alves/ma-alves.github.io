export const siteConfig = {
  name: "Matheus Alves",
  title: "Back-End Developer",
  description: "Portfolio website of Matheus Alves",
  accentColor: "#7008e7",
  social: {
    email: "matheusvialves@outlook.com",
    linkedin: "https://linkedin.com/in/matheusvialves",
    // twitter: "https://x.com/rfitzio",
    github: "https://github.com/ma-alves",
  },
  aboutMe:
    "Sou Técnico em Informática e estou me especializando em Desenvolvimento Back-end, com foco nos frameworks FastAPI e Django. Dentro da minha experiência desenvolvendo projetos tive contato com os bancos de dados MySQL, PostgreSQL e SQLite; desenvolvi o meu TCC utilizando PHP; para a criação de um CLI que conecta com a API do GitHub utilizei Rust; Docker, GitHub Actions e Postman para o desenvolvimento de uma API REST desenvolvida com FastAPI; e Django Channels para o densenvolvimento de uma aplicação de conversas em tempo real. Minhas maiores qualidades são a aptidão para o aprendizado e engajamento na compreensão do fluxo de trabalho da equipe.",
  skills: ["Python", "Django", "FastAPI", "PostgreSQL", "Docker"],
  projects: [
    {
      name: "clairo",
      description:
        "Chat App em tempo real com monitoramento de status online sem a coleta de dados pessoais, com sistema de segurança baseado em tokens",
      link: "https://github.com/ma-alves/clairo",
      skills: ["Django", "Docker", "Tailwind CSS", "Redis", "PostgreSQL"],
    },
    // {
    //   name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
    //   description:
    //     "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
    //   link: "https://fullstackextensions.com/?ref=devportfolio",
    //   skills: ["React", "Node.js", "AWS"],
    // },
    // {
    //   name: "ExtensionKit",
    //   description:
    //     "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
    //   link: "https://extensionkit.io/?ref=devportfolio",
    //   skills: ["React", "Node.js", "AWS"],
    // },
  ],
  experience: [
    {
      company: "Escola Técnica de Brasília",
      title: "Estagiário",
      dateRange: "Agosto 2025 - Novembro 2025",
      bullets: [
        "Manutenção e formatação de computadores",
        "Instalação e configuração de softwares",
        "Suporte técnico a professores e alunos",
      ],
    },
    // {
    //   company: "Startup Inc",
    //   title: "Full Stack Developer",
    //   dateRange: "Jun 2020 - Dec 2021",
    //   bullets: [
    //     "Built and launched MVP product from scratch using React and Node.js",
    //     "Implemented CI/CD pipeline reducing deployment time by 60%",
    //     "Collaborated with product team to define technical requirements",
    //   ],
    // },
    // {
    //   company: "Digital Agency",
    //   title: "Frontend Developer",
    //   dateRange: "Aug 2018 - May 2020",
    //   bullets: [
    //     "Developed responsive web applications for 20+ clients",
    //     "Improved site performance scores by 35% on average",
    //     "Introduced modern JavaScript frameworks to legacy codebases",
    //   ],
    // },
  ],
  education: [
    {
      school: "Escola Técnica de Brasília",
      degree: "Técnico em Informática",
      dateRange: "2023 - 2025",
      achievements: [
        "Desenvolvimento de sistemas web",
        "Modelagem de sistemas e bancos de dados",
        "Manutenção de hardware",
        "Utilização de sistemas operacionais UNIX"
      ],
    },
    // {
    //   school: "Online Platform",
    //   degree: "Full Stack Development Certificate",
    //   dateRange: "2019",
    //   achievements: [
    //     "Completed 500+ hours of coursework",
    //     "Built 10+ portfolio projects",
    //     "Specialized in React and Node.js",
    //   ],
    // },
  ],
};
