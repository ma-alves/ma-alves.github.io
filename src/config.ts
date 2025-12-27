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
    "Sou Desenvolvedor Back-end com foco nos frameworks web FastAPI e Django da linguagem Python, em conjunto com Docker e GitHub Actions para desenvolvimento e automações. Possuo experiência com PostgreSQL, MySQL e SQLite no desenvolvimento de projetos web, sendo o primeiro de forma assíncrona com SQLAlchemy no FastAPI, assim como já utilizei Redis para operações Pub/Sub em channel layers de WebSockets. Também possuo conhecimento básico de Rust, intermediário de JavaScript e estou estudando Node.js + Express para ampliar minha stack de back-end. Minhas maiores qualidades são a aptidão para o aprendizado e engajamento na compreensão do fluxo de trabalho das equipes em que faço parte. Atualmente estou a procura de uma oportunidade para demonstrar minha capacidade em solucionar problemas e contribuir ativamente com a equipe, assim como aprender o máximo possível.",
  skills: ["Python", "Django", "FastAPI", "JavaScript", "PostgreSQL", "Docker", "GitHub Actions"],
  projects: [
    {
      name: "papo",
      description:
        "Chat App em tempo real com monitoramento de status online sem coleta de dados pessoais, com sistema de recuperação de senha baseado em tokens (PAT).",
      link: "https://papo-uexb.onrender.com",
      skills: ["Django", "Tailwind", "Redis", "PostgreSQL", "Docker"],
    },
    {
      name: "Costume Rental API",
      description:
        "RESTful API para servir uma aplicação de aluguel de fantasias, com sessões protegidas por JWT e alta cobertura de testes. Projeto documentado em inglês.",
      link: "https://github.com/ma-alves/costume-rental-api",
      skills: ["FastAPI", "Pytest","PostgreSQL", "Docker"],
    },
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
