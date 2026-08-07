import type { Dict } from "./types";

export const pt: Dict = {
  locale: "pt",
  htmlLang: "pt-BR",

  meta: {
    title: "Gabriel Stedile | Engenheiro Frontend Sênior",
    description:
      "Engenheiro Frontend Sênior — React, TypeScript, Node.js e integração com IA. Mais de 10 anos construindo aplicações web para clientes globais.",
  },

  nav: {
    links: [
      { label: "Início", href: "#hero" },
      { label: "Perfil", href: "#about" },
      { label: "Trajetória", href: "#journey" },
      { label: "Trabalhos", href: "#work" },
      { label: "Stack", href: "#skills" },
      { label: "Resultados", href: "#achievements" },
      { label: "Contato", href: "#contact" },
    ],
    talk: "Vamos conversar",
    ariaMain: "Navegação principal",
    ariaHome: "Início",
    ariaToggleMenu: "Abrir ou fechar navegação",
    ariaOpenPalette: "Abrir paleta de comandos",
    langToggle: { label: "EN", href: "/", aria: "EN · View in English" },
  },

  hero: {
    eyebrow: "Engenharia frontend com visão de produto",
    titlePre: "Interfaces que fazem o complexo ",
    titleGradient: "parecer simples.",
    lead: "React em primeiro lugar e forma de produto: transformo requisitos de negócio em aplicações web rápidas e acessíveis — e na camada Node.js por trás delas — para marcas globais e startups em crescimento.",
    monoLine:
      "Engenheiro Frontend Sênior / Full Stack Capaz / Integração com IA",
    ctaWork: "Explore meu trabalho",
    ctaResume: "Baixar currículo",
    availability: "Aberto a vagas remotas",
    socialAria: {
      group: "Redes sociais",
      github: "Perfil no GitHub",
      linkedin: "Perfil no LinkedIn",
      email: "Enviar e-mail",
    },
    panelLabel: "Interface em produção",
    live: "No ar",
    terminal: {
      deployPrefix: "deploy: produção ·",
      vitals: "✓ LCP 1.2s · INP 80ms · CLS 0.01",
      a11yLabel: "a11y:",
      a11yValue: "testado com teclado + leitor de tela",
      aiLabel: "ia:",
      aiValue: "agentes conectados · 0 pixels alucinados",
    },
    stats: {
      years: "Anos de experiência",
      apps: "Aplicações entregues",
      clients: "Clientes globais",
      layers: "Camadas: UI · API · IA",
    },
  },

  marqueeAria: "Principais tecnologias",

  profile: {
    eyebrow: "Perfil",
    titlePre: "React em primeiro lugar. IA no horizonte. ",
    titleGradient: "Pé na realidade do produto.",
    paragraphs: [
      "Sou o Gabriel, engenheiro frontend de Florianópolis com mais de 10 anos entre software houses, fintech, SaaS e consultoria global. Minha experiência mais profunda é em React e TypeScript — entregando para clientes como IBM, Pfizer, Audi, AKQA e BCW, onde a régua de qualidade e os prazos são inegociáveis.",
      "Quando o produto precisa, desço mais na stack: já construí do zero a API de um SaaS B2B em Node.js, implementei autenticação, autorização e paginação, e desenhei camadas BFF em função do que as interfaces realmente consomem.",
      "No momento estou aprofundando integração com IA — agentes, funcionalidades com LLMs e fluxos de engenharia assistidos por IA — por meio de um MBA em Engenharia de Software com IA e projetos práticos.",
    ],
    principles: [
      "Ser dono da interface de ponta a ponta — do handoff de design às métricas em produção.",
      "Tratar estados de carregamento, vazio e erro como parte do produto, não como sobra.",
      "Entregar rápido sem deixar um código que a próxima pessoa não consiga ler.",
    ],
    asideAria: "Resumo do perfil do desenvolvedor",
    photoAlt: "Retrato de Gabriel Stedile",
    cardTagline:
      "Engenheiro frontend para times de produto que se importam com os detalhes.",
    basedIn: {
      label: "Baseado em",
      value: "Florianópolis, Brasil · remote-friendly",
    },
    deepest: {
      label: "Maior profundidade",
      value: "React, TypeScript, Next.js, Node.js BFF",
    },
    expanding: {
      label: "Em expansão",
      value: "Agentes de IA, integração com LLMs, fluxos assistidos por IA",
    },
  },

  journey: {
    eyebrow: "Trajetória",
    title: "Uma década chegando mais perto do usuário.",
    description:
      "As stacks mudaram, a direção não: rumo às decisões que fazem o software parecer certo para quem o usa.",
    entries: [
      {
        period: "2015",
        company: "Supero Tecnologia",
        companyUrl: "https://www.supero.com.br",
        title: "Aprendi versatilidade numa software house",
        description:
          "Soluções sob medida para clientes como Philips Clinical Informatics e Engie Brasil, transitando entre AngularJS, Java e JavaScript — construindo a adaptabilidade que o trabalho acelerado com clientes exige.",
      },
      {
        period: "2018",
        company: "Par Mais",
        companyUrl: "https://www.parmais.com.br",
        title: "Virei stakeholder de produto em fintech",
        description:
          "Mantive e evoluí uma plataforma financeira em produção (React + Node.js) para clientes de assessoria de investimentos — e conquistei assento nas discussões de regras de negócio e UX, unindo engenharia e produto.",
      },
      {
        period: "2019",
        company: "Involves",
        companyUrl: "https://involves.com",
        title: "Construí um SaaS B2B do zero",
        description:
          "Desenvolvi simultaneamente a API (Node.js), o app web (React) e o app mobile (React Native) de um produto novo, dentro de uma cultura de engenharia centrada em code review e feedback contínuo.",
      },
      {
        period: "2020",
        company: "ArcTouch",
        companyUrl: "https://arctouch.com",
        title: "Escalei para clientes globais — e para Tech Lead",
        description:
          "Entreguei mais de 10 aplicações web em React e TypeScript para IBM, Pfizer, Audi, AKQA e BCW, de MVPs greenfield a plataformas de longa duração. Atuei como Tech Lead em um engajamento-chave e contribuí com APIs Node.js e camadas BFF.",
      },
      {
        period: "2025–26",
        title: "Dobrando a aposta em engenharia integrada com IA",
        description:
          "Construindo com React, TypeScript, Node.js e agentes de IA enquanto curso um MBA em Engenharia de Software com IA — trazendo padrões de integração com LLMs para o dia a dia de produto.",
      },
    ],
  },

  work: {
    eyebrow: "Trabalhos selecionados",
    title: "Produtos que ajudei a entregar.",
    description:
      "A maior parte do trabalho para clientes está sob NDA — aqui está descrito no nível que posso compartilhar, com papel e stack intactos.",
    filterAria: "Filtrar projetos por categoria",
    categories: [
      { value: "all", label: "Todos" },
      { value: "enterprise", label: "Enterprise" },
      { value: "saas", label: "SaaS" },
      { value: "fintech", label: "Fintech" },
      { value: "personal", label: "IA & Pessoal" },
    ],
    ndaShort: "NDA",
    ndaTitle: "Trabalho para cliente sob NDA",
    ndaLong: "Trabalho sob NDA — descrito no nível que posso compartilhar.",
    viewDetails: "Ver detalhes →",
    modalContext: "Contexto",
    modalWhat: "O que eu fiz",
    modalOutcome: "Resultado",
    modalLabelSuffix: "— detalhes",
    modalFallbackLabel: "Detalhes do projeto",
    closeAria: "Fechar diálogo",
    items: [
      {
        id: "ibm-platforms",
        title: "Plataformas enterprise de longa duração",
        client: "IBM · via ArcTouch",
        category: "enterprise",
        summary:
          "Plataformas React + TypeScript de anos, onde consistência, acessibilidade e processo importavam tanto quanto features.",
        context:
          "Engajamentos de vários anos entregando e evoluindo plataformas web para uma das maiores empresas de tecnologia do mundo — codebases grandes, times distribuídos e cultura de review de nível enterprise.",
        contributions: [
          "Construí e mantive aplicações React + TypeScript dentro de times de produto de longa duração",
          "Atuei como Tech Lead em um engajamento-chave, coordenando entrega e decisões técnicas",
          "Contribuí com APIs Node.js e camadas BFF moldadas pelo que as interfaces precisavam",
          "Mantive padrões de acessibilidade e code review consistentes ao longo de anos de iteração",
        ],
        outcome:
          "Entrega sustentada através de múltiplos releases e rotações de time — o tipo de plataforma em que o código precisa sobreviver a qualquer desenvolvedor individual.",
        stack: ["React", "TypeScript", "Node.js", "Acessibilidade"],
        nda: true,
      },
      {
        id: "pfizer-health",
        title: "Experiências web para saúde",
        client: "Pfizer · via ArcTouch",
        category: "enterprise",
        summary:
          "Aplicações web acessíveis e em conformidade para uma farmacêutica global — onde acertar os detalhes é inegociável.",
        context:
          "Produtos web ligados à saúde para uma marca farmacêutica global, construídos sob revisão rigorosa: conformidade jurídica, de acessibilidade e de marca em cada entrega.",
        contributions: [
          "Implementei interfaces React acessíveis, revisadas contra expectativas WCAG",
          "Traduzi conteúdo regulado e juridicamente revisado em sistemas de componentes manuteníveis",
          "Trabalhei design-to-code a partir de handoffs de alta fidelidade, com precisão de pixel",
        ],
        outcome:
          "Experiências que passaram pelas camadas de revisão de conformidade que a indústria farmacêutica exige — prova de que velocidade e rigor podem coexistir.",
        stack: ["React", "TypeScript", "Acessibilidade", "Design systems"],
        nda: true,
      },
      {
        id: "audi-automotive",
        title: "Experiências digitais automotivas",
        client: "Audi · via ArcTouch",
        category: "enterprise",
        summary:
          "Experiências web ricas em movimento e marca, onde fidelidade de design e orçamentos de performance puxavam em direções opostas.",
        context:
          "Experiências digitais para uma marca automotiva premium — interfaces altamente visuais e guiadas por animação, onde a régua de design é definida pelos padrões da própria marca.",
        contributions: [
          "Implementei interfaces ricas em movimento com GSAP e animação CSS, aplicadas com contenção",
          "Equilibrei assets visuais pesados contra orçamentos de Core Web Vitals",
          "Entreguei implementação design-to-code fiel a partir de handoffs de nível agência",
        ],
        outcome:
          "Interfaces que mantiveram a sensação premium da marca sem abrir mão da performance de carregamento.",
        stack: ["React", "TypeScript", "GSAP", "Web Vitals"],
        nda: true,
      },
      {
        id: "agency-campaigns",
        title: "Plataformas de campanha e marca",
        client: "AKQA · BCW · via ArcTouch",
        category: "enterprise",
        summary:
          "Sites de campanha e plataformas de marca para agências globais — MVPs greenfield entregues no ritmo de agência.",
        context:
          "Trabalho com duas agências globais em múltiplos projetos de campanha e plataforma — ciclos curtos, requisitos em movimento e datas de lançamento que não mudam.",
        contributions: [
          "Levei projetos greenfield do kickoff à produção em datas de lançamento fixas",
          "Construí fundações de componentes reutilizáveis para nenhuma campanha começar do zero",
          "Colaborei diretamente com os times de design e estratégia das agências",
        ],
        outcome:
          "Lançamentos repetidos no prazo — o motivo de os engajamentos continuarem voltando.",
        stack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
        nda: true,
      },
      {
        id: "involves-saas",
        title: "SaaS B2B construído do zero",
        client: "Involves",
        category: "saas",
        summary:
          "API, app web e app mobile de um produto novo — desenvolvidos simultaneamente, dentro de uma forte cultura de code review.",
        context:
          "Um novo produto SaaS B2B em uma empresa consolidada de tecnologia para varejo: um time pequeno construindo toda a superfície do produto de uma vez, do banco de dados à loja de apps.",
        contributions: [
          "Desenvolvi em paralelo a API Node.js, o app web React e o app mobile React Native",
          "Ajudei a moldar as fundações técnicas do produto desde o primeiro commit",
          "Trabalhei numa cultura de engenharia centrada em code review e feedback contínuo",
        ],
        outcome:
          "Uma superfície completa de produto — API, web e mobile — construída do zero por um time pequeno que era dono de tudo.",
        stack: ["React", "React Native", "Node.js", "REST APIs"],
      },
      {
        id: "parmais-fintech",
        title: "Plataforma de assessoria de investimentos",
        client: "Par Mais",
        category: "fintech",
        summary:
          "Plataforma fintech em produção para clientes de assessoria de investimentos — onde a engenharia conquistou assento nas discussões de negócio e UX.",
        context:
          "Uma plataforma financeira ativa servindo clientes reais de assessoria: frontend React, backend Node.js, e regras de negócio onde erros têm custo medido em dinheiro.",
        contributions: [
          "Mantive e evoluí o frontend React e os serviços Node.js da plataforma",
          "Participei de discussões de regras de negócio e UX, unindo engenharia e produto",
          "Lidei com o cuidado que dados financeiros em produção exigem",
        ],
        outcome:
          "Confiança suficiente para sair de implementar tickets e passar a ajudar a defini-los.",
        stack: ["React", "Node.js", "Colaboração em UX", "Fintech"],
      },
      {
        id: "philips-health",
        title: "Soluções de informática clínica",
        client: "Philips · via Supero",
        category: "enterprise",
        summary:
          "Software de saúde sob medida para a Philips Clinical Informatics — prova precoce de que adaptabilidade é uma habilidade em si.",
        context:
          "Trabalho de software house para clientes enterprise, incluindo Philips Clinical Informatics e Engie Brasil — stacks diferentes, domínios diferentes, mesma expectativa de qualidade.",
        contributions: [
          "Entreguei funcionalidades em codebases AngularJS, Java e JavaScript",
          "Me adaptei rapidamente entre contextos de cliente, domínios e stacks",
          "Construí a versatilidade que depois fez o ritmo de agência parecer familiar",
        ],
        outcome:
          "Os anos de fundação: aprender que os fundamentos se transferem mesmo quando a stack não.",
        stack: ["AngularJS", "Java", "JavaScript"],
        nda: true,
      },
      {
        id: "portfolio-ai",
        title: "gabrielstedile.dev — este site",
        client: "Pessoal · Assistido por IA",
        category: "personal",
        summary:
          "Este portfólio: Next.js + Tailwind v4 + Motion, construído em par com um agente de IA — o fluxo de trabalho que ele anuncia, aplicado a si mesmo.",
        context:
          "Uma demonstração prática de engenharia integrada com IA: o site foi projetado e construído em colaboração com um agente de IA, com cada decisão revisada e publicada por um fluxo git real até a Vercel.",
        contributions: [
          "Projetei o sistema de design tokens, a biblioteca de componentes e a arquitetura de conteúdo",
          "Dirigi um agente de IA por entregas em fases — design system, layout, interações",
          "Sou dono do pipeline de deploy: GitHub → Vercel, com Web Analytics em produção",
        ],
        outcome:
          "O site que você está lendo — entregue em dias, não semanas, sem abrir mão de qualidade de código.",
        stack: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Motion",
          "Agentes de IA",
        ],
        link: {
          label: "Ver código no GitHub",
          url: "https://github.com/GabrielStedile999/gabrielstedile.dev",
        },
      },
    ],
  },

  stack: {
    eyebrow: "Stack",
    titlePre: "Organizada por ",
    titleGradient: "responsabilidade",
    titlePost: ", não por contagem de logos.",
    description:
      "Ferramentas mudam. Saber qual fronteira de componente, contrato de dados ou milissegundo merece atenção é o que fica.",
    areas: [
      {
        title: "Arquitetura de componentes",
        description:
          "Design systems, padrões de composição e componentes acessíveis que se mantêm consistentes entre times, marcas e anos de evolução do produto.",
      },
      {
        title: "Estado e fluxo de dados",
        description:
          "Server state, cache, formulários e contratos de dados previsíveis sobre REST e GraphQL — para a UI sempre saber o que renderizar, mesmo quando as coisas falham.",
      },
      {
        title: "Performance e Web Vitals",
        description:
          "Orçamentos para LCP, INP e CLS, code-splitting, estratégia de imagens e medição antes e depois — velocidade tratada como feature, não como detalhe.",
      },
      {
        title: "Design-to-code e motion",
        description:
          "Implementação fiel a partir do handoff de design, sistemas baseados em Tailwind, e animação com GSAP e Motion aplicada com contenção e intenção.",
      },
      {
        title: "Backend for frontend",
        description:
          "APIs Node.js, autenticação e autorização, paginação e camadas BFF moldadas pelo que a interface realmente precisa.",
      },
      {
        title: "Integração com IA",
        description:
          "Funcionalidades com LLMs, agentes de IA e pipelines de retrieval conectados a UIs de produto — além de fluxos assistidos por IA que encurtam ciclos de desenvolvimento.",
      },
    ],
  },

  proof: {
    eyebrow: "Resultados",
    title: "Sinais de entrega sustentada.",
    description:
      "Não são números de vaidade — é o escopo e a repetição por trás de uma década entregando.",
    metrics: [
      {
        value: 10,
        suffix: "+",
        title: "Anos dentro de times de produto",
        description:
          "De software house a consultoria global — os mesmos fundamentos atravessaram todos os contextos: contratos claros, estimativas honestas, trabalho entregue.",
      },
      {
        value: 10,
        suffix: "+",
        title: "Aplicações entregues",
        description:
          "De MVPs greenfield a plataformas de longa duração em React e TypeScript, cada uma levada do requisito à produção.",
      },
      {
        value: 6,
        title: "Marcas globais atendidas",
        description:
          "IBM, Pfizer, Audi, AKQA, BCW e Philips — expectativas enterprise de qualidade, acessibilidade e processo.",
      },
      {
        value: 3,
        title: "Camadas da stack dominadas",
        description:
          "UI, API e IA — mais profundo na interface, capaz na camada Node.js por trás dela, e em expansão para integração com LLMs.",
      },
    ],
  },

  workingStyle: {
    eyebrow: "Jeito de trabalhar",
    title: "Os hábitos por trás da entrega.",
    description: "Princípios práticos que levo a todo time de produto.",
    habits: [
      {
        title: "Ownership de ponta a ponta",
        description:
          "Uma feature não está pronta no merge. Eu a acompanho pelo rollout, métricas de usuários reais e feedback — e ajusto quando a produção discorda do plano.",
        punchline: "Entregue significa medido",
      },
      {
        title: "Casos extremos primeiro",
        description:
          "Estados de carregamento, vazio e erro são desenhados junto com o caminho feliz, não depois dele. É aí que os usuários decidem se um produto parece sólido.",
        punchline: "Os detalhes são o produto",
      },
      {
        title: "Alinhamento como hábito",
        description:
          "Transformo requisitos vagos em contratos explícitos, exponho trade-offs cedo e mantenho produto, design e engenharia na mesma direção.",
        punchline: "Menos surpresas, times mais rápidos",
      },
    ],
  },

  contact: {
    eyebrow: "Contato",
    titlePre: "Vamos construir algo que as pessoas ",
    titleGradient: "gostem de usar.",
    description:
      "Me conte sobre o produto, a stack e como é o sucesso — eu trago profundidade de frontend e o alcance para ir além quando necessário.",
    openToWork: "Aberto a propostas",
    copy: "Melhor encaixe: vagas sênior de frontend ou full-stack com foco em frontend, em times orientados a produto — remoto, Brasil ou internacional. Respondo em 1–2 dias úteis.",
    emailBtn: "Me envie um e-mail",
    resumeBtn: "Currículo",
  },

  footer: {
    tagline:
      "Engenheiro Frontend Sênior — construindo interfaces que movem produtos para a frente.",
    ariaLabel: "Rodapé",
    links: [
      { label: "Início", href: "/pt" },
      { label: "Currículo", href: "/pt/resume" },
      { label: "Notes", href: "/notes" },
      { label: "English", href: "/" },
      {
        label: "GitHub",
        href: "https://github.com/GabrielStedile999",
        external: true,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/gabriel-stedile",
        external: true,
      },
      {
        label: "Código-fonte",
        href: "https://github.com/GabrielStedile999/gabrielstedile.dev",
        external: true,
      },
    ],
    rights: "Aberto a vagas remotas",
  },

  resume: {
    metaTitle: "Currículo",
    metaDescription:
      "Currículo de Gabriel Stedile — Engenheiro Frontend Sênior com mais de 10 anos de experiência em React, TypeScript, Node.js e integração com IA.",
    path: "/pt/resume",
    actionsAria: "Ações do currículo",
    backLabel: "gabrielstedile.dev/pt",
    downloadPdf: "Baixar PDF (EN)",
    print: "Imprimir",
    langToggle: {
      label: "EN",
      href: "/resume",
      aria: "EN · View resume in English",
    },
    roleLine:
      "Engenheiro Frontend Sênior | React · TypeScript · Node.js · Integração com IA",
    availability: "Aberto a vagas remotas",
    sections: {
      summary: "Resumo Profissional",
      skills: "Habilidades Técnicas",
      experience: "Experiência",
      education: "Formação",
      languages: "Idiomas",
    },
    summary:
      "Engenheiro Frontend Sênior com mais de 10 anos de experiência construindo aplicações web para clientes enterprise globais, incluindo IBM, Pfizer e AKQA. Especialista no ecossistema React/TypeScript, com foco em arquitetura de componentes, performance e integração de APIs. Experiência complementar de backend com Node.js (APIs REST e camadas BFF) e experiência como Tech Lead conduzindo decisões arquiteturais em projetos greenfield e de modernização de legado. Atualmente aprofundando habilidades de integração com IA (MCP, Agentes de IA, RAG, LLMs) por meio de um MBA em Engenharia de Software com IA. Em busca de vagas sênior de Engenharia Frontend com integração de IA, focadas em produto e experiência do usuário.",
    skills: [
      {
        label: "Frontend",
        items: [
          "React",
          "TypeScript",
          "JavaScript",
          "Next.js",
          "Tailwind CSS",
          "SASS",
          "GSAP",
        ],
      },
      {
        label: "Backend",
        items: [
          "Node.js",
          "APIs REST",
          "GraphQL",
          "Arquitetura BFF",
          "PostgreSQL",
          "Docker",
        ],
      },
      {
        label: "IA / ML",
        items: [
          "Cursor",
          "Claude Code",
          "Agentes de IA",
          "MCP",
          "Engenharia de Prompt",
          "RAG",
          "Integração com LLMs",
        ],
      },
      {
        label: "Qualidade e Processo",
        items: [
          "Agile/Scrum/Lean",
          "Liderança Técnica",
          "Testes (Jest)",
          "Observabilidade (OpenTelemetry, Sentry)",
          "Code Review",
          "CI/CD",
          "Git",
        ],
      },
    ],
    experience: [
      {
        company: "Autônomo",
        role: "Engenheiro Full Stack — Projetos Pessoais e MBA",
        period: "Jul 2025 – Presente",
        location: "Florianópolis, SC, Brasil",
        bullets: [
          "Construindo projetos com React, TypeScript, Node.js, MCP e Agentes de IA — aplicando práticas de engenharia assistida por IA para explorar padrões de integração com LLMs e reduzir ciclos de desenvolvimento.",
          "Cursando MBA em Engenharia de Software com IA na Full Cycle, com foco em Agentes de IA, system design e liderança técnica.",
        ],
      },
      {
        company: "ArcTouch",
        role: "Engenheiro Web Full Stack",
        period: "Out 2020 – Jun 2025",
        duration: "4 anos 9 meses",
        location: "Florianópolis, SC, Brasil",
        bullets: [
          "Entreguei mais de 10 aplicações web em React e TypeScript para clientes de vários portes e contextos de negócio, incluindo enterprises globais (IBM, Pfizer, Audi, AKQA, BCW), de MVPs greenfield a plataformas de longa duração. Contribuí na construção e manutenção de APIs Node.js e camadas BFF.",
          "Atuei como Tech Lead em um engajamento-chave, coordenando um time multifuncional e conduzindo decisões técnicas críticas — alinhando requisitos de produto com a execução de engenharia.",
          "Desenvolvi adaptabilidade, onboarding rápido e autoaprendizado com novas tecnologias em projetos de prazo curto — expandindo a experiência prática para Tailwind CSS, GSAP, SASS, Craft CMS e Meta Spark Studio, entre outras.",
        ],
      },
      {
        company: "Involves",
        role: "Desenvolvedor de Software",
        period: "Set 2019 – Set 2020",
        duration: "1 ano 1 mês",
        location: "Florianópolis, SC, Brasil",
        bullets: [
          "Construí um produto SaaS B2B do zero, desenvolvendo simultaneamente a API (Node.js), a aplicação web (React) e o app mobile (React Native).",
          "Trabalhei numa cultura de engenharia focada em qualidade de código e feedback contínuo — fortalecendo práticas de code review e colaboração técnica.",
        ],
      },
      {
        company: "Par Mais",
        role: "Desenvolvedor Full Stack",
        period: "Abr 2018 – Ago 2019",
        duration: "1 ano 5 meses",
        location: "Florianópolis, SC, Brasil",
        bullets: [
          "Desenvolvi uma aplicação web financeira em produção (React + Node.js) para clientes de assessoria de investimentos — garantindo estabilidade e continuidade de um sistema de negócio estabelecido.",
          "Atuei como stakeholder de produto na definição de regras de negócio e discussões de UX — unindo perspectivas técnicas e de negócio para alinhar a entrega de engenharia às necessidades do cliente.",
        ],
      },
      {
        company: "Supero Tecnologia",
        role: "Desenvolvedor Full Stack",
        period: "Nov 2015 – Jan 2018",
        duration: "2 anos 3 meses",
        location: "Florianópolis, SC, Brasil",
        bullets: [
          "Entreguei soluções sob medida para múltiplos clientes, incluindo Philips Clinical Informatics e Engie Brasil, adaptando-me rapidamente entre stacks diferentes (AngularJS, Java, JavaScript) — construindo versatilidade técnica num ambiente acelerado de software house.",
        ],
      },
    ],
    education: [
      {
        institution: "Full Cycle",
        degree: "MBA — Engenharia de Software com IA",
        period: "Fev 2026 – Fev 2027",
      },
      {
        institution: "Universidade Federal de Santa Catarina",
        degree: "Bacharelado em Sistemas de Informação",
        period: "2014 – 2020",
      },
    ],
    languages: [
      { language: "Inglês", level: "B2–C1" },
      { language: "Português", level: "Nativo" },
    ],
    preferFile: "Prefere um arquivo?",
    downloadLink: "Baixar a versão em PDF (inglês)",
  },

  palette: {
    dialogAria: "Paleta de comandos",
    searchAria: "Buscar comandos",
    placeholder: "Digite um comando ou busque…",
    listAria: "Comandos",
    groups: { navigate: "Navegar", actions: "Ações" },
    noResultsPrefix: "Nenhum resultado para",
    hintNavigate: "↑↓ navegar",
    hintSelect: "↵ selecionar",
    commands: {
      home: "Início",
      profile: "Perfil",
      journey: "Trajetória",
      work: "Trabalhos selecionados",
      stack: "Stack",
      proof: "Resultados",
      contact: "Contato",
      resumePage: "Página de currículo",
      notes: "Notes",
      downloadResume: "Baixar currículo",
      copyEmail: "Copiar endereço de e-mail",
      copied: "E-mail copiado!",
      sendEmail: "Enviar um e-mail",
      openGithub: "Abrir GitHub",
      openLinkedin: "Abrir LinkedIn",
    },
    hints: { pdf: "PDF", newTab: "nova aba", mailto: "mailto" },
  },
};
