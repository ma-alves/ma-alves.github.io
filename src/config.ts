export const siteConfig = {
  name: "Matheus Alves",
  title: "Back-End Developer",
  description: "Portfolio website of Matheus Alves",
  accentColor: "#7008e7",
  social: {
    email: "matheusvialves@proton.me",
    linkedin: "https://linkedin.com/in/matheusvialves",
    // twitter: "https://x.com/rfitzio",
    github: "https://github.com/ma-alves",
  },
  aboutMe:
    "Desenvolvedor Back-end com sólida base técnica no desenvolvimento de APIs REST seguindo padrões a nível de produção com segurança, disponibilidade, documentação e CI/CD. Busco uma oportunidade para atuar como desenvolvedor júnior e contribuir com a equipe aplicando meus conhecimentos em Python e Node.js para solucionar problemas reais e evoluir tecnicamente em um ambiente colaborativo. Tenho experiência prática em FastAPI, Django e Express, em conjunto com Docker e GitHub Actions para desenvolvimento e automações. Possuo projetos que utilizam PostgreSQL, MySQL e SQLite, acessados através das ORMs SQLAlchemy e Sequelize, assim como já utilizei Redis para operações Pub/Sub em channel layers de WebSockets. Também possuo conhecimento prático em Rust para construção de CLIs. Minhas maiores qualidades são a aptidão para o aprendizado e engajamento na compreensão do fluxo de trabalho das equipes em que faço parte.",
  skills: ["APIs REST", "Clean Architecture", "MVC", "Python", "Django", "FastAPI", "PostgreSQL", "Redis", "Node.js + Express", "TypeScript", "Docker", "GitHub Actions", "Rust"],
  projects: [
    {
      name: "papo",
      description:
        "Chat App em tempo real com monitoramento de status online sem coleta de dados pessoais, com sistema de recuperação de senha baseado em tokens (PAT).",
      link: "https://papo-uexb.onrender.com",
      skills: ["Django", "Redis", "PostgreSQL", "Docker", "GitHub Actions", "Tailwind", "WebSockets"],
    },
    {
      name: "Costume Rental API",
      description:
        "API REST para servir uma aplicação de aluguel de fantasias, com sessões protegidas por JWT e alta cobertura de testes. Projeto documentado em inglês.",
      link: "https://github.com/ma-alves/costume-rental-api",
      skills: ["FastAPI", "PostgreSQL", "Docker", "GitHub Actions", "API REST"],
    },
    {
      name: "URL Shortener API",
      description:
        "API para encurtar URLs desenvolvida com FastAPI e arquitetura assíncrona para alto desempenho. Códigos de URL criados utilizando base 62 com range de 7 dígitos, possibilitando 62⁷ combinações de caracteres, valor mais do que suficiente para a escalabilidade do serviço.",
      link: "https://github.com/ma-alves/url-shortener",
      skills: ["FastAPI", "PostgreSQL", "Redis", "Docker"],
    },
    {
      name: "buhtig",
      description:
        "Aplicativo de linha de comando para consumir dados da API do GitHub sobre atividades de usuários e em repositórios.",
      link: "https://github.com/ma-alves/buhtig",
      skills: ["Rust", "Clap", "Reqwests", "Serde"],
    },
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
        "Sistemas operacionais UNIX"
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
