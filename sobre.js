/*
  Dados da página "Sobre" (data-driven).
  A timeline e as entradas de experiência são renderizadas a partir deste objeto,
  na ordem em que aparecem em `experiences` (de cima para baixo).

  >>> TODO: este arquivo está com PLACEHOLDERS. Preencha com seu histórico real.
      - Não inventei bio, datas, cargos nem tecnologias de propósito.
      - `year` é o que aparece na timeline lateral (use o ano real de cada entrada).
      - `photo`: troque para o caminho real (ex.: "assets/sobre/retrato.jpg").
        Enquanto começar com "TODO", a página mostra um placeholder no lugar da foto.
*/
const SOBRE = {
  intro: {
    headline: "Desenvolvedor Web Fullstack Pleno",
    paragraphs: [
      "Desenvolvedor full-stack com formação em Engenharia da Computação e Análise e Desenvolvimento de Sistemas, e experiência em desenvolvimento web, arquitetura de sistemas e design. Construo soluções de ponta a ponta, do planejamento técnico ao deploy em produção, com foco em performance, clareza e manutenibilidade.",
      "Movido por performance e experiência do usuário, crio soluções digitais que deixam um impacto duradouro."
    ],
    photo: "TODO: caminho da foto (ex.: assets/sobre/retrato.jpg)"
  },

  experiences: [
    {
      year: "2025",
      dateRange: "Feb 2025 — Present",
      company: "Farmanguinhos (Fiocruz)",
      role: "Auxiliar Administrativo",
      bullets: [
        "Analiso divergências de inventário e confiro mercadorias contra notas fiscais, garantindo conformidade entre sistema (SAP) e estoque físico.",
        "Atualizo planilhas de controle logístico em Excel com dados de movimentação e níveis de estoque, sustentando relatórios de decisão operacional para a área.",
        "Registro e movimento materiais no SAP S/4HANA na área de logística, monitorando níveis de estoque para evitar rupturas e excessos."
      ],
      tech: ["SAP S/4HANA", "Excel", "Power BI"]
    },
    {
      year: "2022",
      dateRange: "Out 2022 — Set 2024",
      company: "Cyrela",
      role: "Jovem Aprendiz",
      bullets: [
        "Conferia e lançava notas fiscais (ISS, ICMS, CND) via Excel e SAP, acompanhando dados no sistema para garantir conformidade fiscal e organizacional.",
        "Dava suporte operacional administrativo: controle de processos internos, documentos e prazos no fluxo de rotina."
      ],
      tech: ["SAP", "Excel"]
    }
  ]
};
