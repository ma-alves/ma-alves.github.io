# Portfólio — Matheus Alves

Portfólio pessoal construído com [Eleventy](https://www.11ty.dev/) + [Tailwind CSS](https://tailwindcss.com/), deploy no GitHub Pages.

## Stack do Projeto

| Camada        | Escolha                          |
|---------------|----------------------------------|
| SSG           | Eleventy v3                      |
| Template      | Nunjucks                         |
| CSS           | Tailwind CSS v3 + PostCSS        |
| Deploy        | GitHub Pages via GitHub Actions  |
| Tema          | Dark (stone-950/200)             |
| Fontes        | Space Grotesk + JetBrains Mono   |

## Estrutura

```
portfolio/
├── .eleventy.js                 # Config Eleventy v3
├── package.json                 # Dependências + scripts
├── tailwind.config.js           # Tailwind com fontes + accent violeta
├── postcss.config.js            # PostCSS + Autoprefixer
├── src/
│   ├── _data/profile.json       # Nome, role, sobre, stack, projetos, sociais
│   ├── _includes/layouts/base.njk   # HTML shell com Google Fonts + Tailwind
│   ├── _includes/partials/
│   │   ├── nav.njk              # Nav: olá · experiência · projetos · educação
│   │   ├── hero.njk             # Nome + role + ícones (email, LinkedIn, GitHub)
│   │   ├── about.njk            # Seção olá! + grid stack técnica
│   │   ├── experience.njk       # Experiência (vazio — pronto pra preencher)
│   │   ├── projects.njk         # 4 projetos (PAPO, COSTUME, URL SHORTENER, BUHTIG)
│   │   └── education.njk        # Educação (vazio — pronto pra preencher)
│   ├── assets/css/main.css      # Entrada Tailwind + :root { --accent-color }
│   └── index.njk                # Página única montando tudo
├── .github/workflows/deploy.yml # Deploy automático p/ GitHub Pages
└── .gitignore
```

## Comandos

```bash
npm run build   # Gera _site/ pronto pra deploy
npm run dev     # Servidor local com hot reload
```

## Conteúdo

- **Hero:** Nome + "Desenvolvedor Backend" + ícones sociais (Proton Mail, LinkedIn, GitHub)
- **olá!:** Texto profissional de apresentação + grid de stack técnica (5 categorias)
- **experiência:** Seção vazia pronta para preencher via `src/_data/profile.json`
- **projetos:** PAPO, COSTUME RENTAL API, URL SHORTENER API, BUHTIG
- **educação:** Seção vazia pronta para preencher via `src/_data/profile.json`

## Deploy

1. Crie um repositório no GitHub (ex: `ma-alves/ma-alves.github.io`)
2. Rode:
   ```bash
   git init
   git add .
   git commit -m "init: portfolio com eleventy + tailwind"
   git remote add origin git@github.com:ma-alves/ma-alves.github.io.git
   git push -u origin main
   ```
3. No GitHub, vá em **Settings > Pages > Source: GitHub Actions**
4. O deploy roda automaticamente no push

## Editar conteúdo

Edite `src/_data/profile.json` — adicione experiência, educação, ou altere textos. O build reflete automaticamente.
