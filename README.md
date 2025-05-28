# 🎮 CheapShark Games

CheapShark Games é uma aplicação web que consome a API pública da [CheapShark](https://apidocs.cheapshark.com/) para listar e filtrar as melhores ofertas de jogos digitais. A interface é responsiva e otimizada para performance, com foco na experiência do usuário e usabilidade das informações.

## 🧠 Funcionalidades

- ✅ Listagem de jogos em promoção com preço e desconto
- 🔍 Filtros dinâmicos por loja, preço e porcentagem de desconto
- 🛍️ Detalhamento do jogo em um modal com ofertas por loja
- 📱 Layout responsivo e componentes reutilizáveis

## 💻 Tecnologias Utilizadas

- **Vite + React.js** – estrutura moderna e rápida para desenvolvimento
- **TypeScript** – segurança e legibilidade no código
- **Tailwind CSS** – estilização com utilitários e responsividade
- **Radix UI / ShadCN** – componentes acessíveis com estilização personalizável
- **CheapShark API** – dados em tempo real das promoções
- **Custom Hooks** – abstração de lógica como filtros e chamadas à API

## 📁 Estrutura do Projeto

```bash
src/
├── assets/                # Imagens e SVGs
├── components/            # Componentes reutilizáveis (UI, Sidebar, Card, Modal etc.)
├── pages/                 # Páginas principais da aplicação
├── services/              # Configurações de requisições à API
├── styles/                # Arquivos de estilo e configurações do Tailwind
├── types/                 # Tipagens TypeScript globais
└── main.tsx               # Ponto de entrada da aplicação
```

## 🛠 Instalação

Windows, MacOs ou Linux: Por ser um projeto React usando Vite, possui alguns passos a serem seguindos para fazer a instalação:

- Abra seu editor de código, indico utilizar o VSCode
- git clone https://github.com/RodrigoTissianel/Game-Deals-Dashboard.git"
- npm install ou yarn install
- npm run dev ou yarn dev
- Acesse http://localhost:5173 para visualizar a aplicação rodando localmente.

## 📝To-Do Futuro

- Sistema de favoritos com persistência em localStorage
- Dark mode

## 🚀 Contribuição

1. Veja mais projetos gratuitos no GitHub (<https://github.com/RodrigoTissianel>)
2. Veja alguns outros projetos no meu portfólio (em manutenção)
3. Muito obrigado por estar aqui!
