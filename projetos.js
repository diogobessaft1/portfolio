/*
  Fonte única de dados dos projetos.
  Usada pelos cards (index.html) e pela página de detalhe (projeto.html).
  A chave do objeto é o SLUG usado na URL: projeto.html?slug=multiverso

  NOTA: o array `tecnologias` é editável — ajuste conforme a stack real de cada projeto.
*/
const PROJETOS = {
  multiverso: {
    nome: "Multiverso",
    tags: ["WEB DEVELOPMENT", "E-COMMERCE"],
    resumo: "Loja geek com painel admin e sistema de reservas.",
    descricao:
      "Site para loja geek com painel administrativo para gestão de produtos e " +
      "um sistema de reservas para os clientes. Autenticação segura, fluxo de " +
      "compra completo e deploy contínuo na Vercel.",
    imagem: "assets/projetos/multiverso.png",
    tecnologias: ["React", "Next.js", "Tailwind CSS", "Painel Admin", "Autenticação", "Vercel"],
    link: "https://multiverso-v3.vercel.app/",
  },

  beautycontrol: {
    nome: "Beauty Control",
    tags: ["WEB DEVELOPMENT", "SAAS"],
    resumo: "Gestão de clientes, agenda e serviços para estética.",
    descricao:
      "Plataforma para profissionais de estética e beleza gerenciarem clientes, " +
      "agendamentos e serviços. Em produção e com novas funcionalidades sendo " +
      "lançadas continuamente.",
    imagem: "assets/projetos/beautycontrol.png",
    tecnologias: ["React", "Next.js", "Dashboard", "Agendamentos", "Vercel"],
    link: "https://beautycontrolb.vercel.app/",
  },

  drluiz: {
    nome: "Dr. Luiz Mendonça",
    tags: ["WEB DEVELOPMENT", "INSTITUCIONAL"],
    resumo: "Site de autoridade médica com CTA para agendamento.",
    descricao:
      "Site de autoridade para médico especializado em emagrecimento, com foco em " +
      "construção de imagem profissional e chamada para agendamento de consultas.",
    imagem: "assets/projetos/drluiz.png",
    tecnologias: ["Next.js", "Design Responsivo", "SEO", "Vercel"],
    link: "https://dr-luiz-mendonca.vercel.app/",
  },

  tatamepro: {
    nome: "TatamePro",
    tags: ["WEB DEVELOPMENT", "SAAS"],
    resumo: "Gestão multi-tenant para academias de jiu-jitsu.",
    descricao:
      "Plataforma de gestão para academias de jiu-jitsu: alunos, matrículas, planos e " +
      "cobranças, com automações diárias por e-mail, dashboard e insights. Arquitetura " +
      "multi-tenant pensada para escalar de academias individuais a redes e franquias.",
    imagem: "assets/projetos/tatamepro.png",
    tecnologias: ["Next.js", "Turborepo", "PostgreSQL", "Multi-tenant", "Automação por e-mail", "Vercel"],
    link: "https://tatame-pro-app.vercel.app/",
  },

  cvtailor: {
    nome: "CV Tailor",
    tags: ["IA", "SAAS"],
    resumo: "IA que adapta o currículo a cada vaga e otimiza para ATS.",
    descricao:
      "Ferramenta de IA que adapta o currículo a cada vaga: analisa o anúncio, calcula a " +
      "compatibilidade e reescreve a experiência real do candidato com o Claude, gerando " +
      "currículos otimizados para ATS, com exportação em PDF/DOCX, carta de apresentação e " +
      "acompanhamento das candidaturas.",
    imagem: null, // deploy protegido — sem screenshot por enquanto
    tecnologias: ["Next.js", "Claude (IA)", "Neon (Postgres)", "ATS", "Export PDF/DOCX"],
    link: null, // em desenvolvimento
    status: "Em desenvolvimento",
  },
};
