// src/data/projects.ts
const baseUrl = import.meta.env.BASE_URL;
export interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "D-Care - ABP-FATEC 2025.2",
    description:
      "D-Care é uma plataforma criada para conectar idosos e suas famílias a cuidadores qualificados. O sistema integra validação profissional (CRM/COREN), agendamento seguro, perfis completos de cuidadores e suporte assistido por IA, tudo isso com foco em transparência, segurança e conformidade total com a LGPD. O objetivo é oferecer uma experiência simples e confiável — permitindo que famílias encontrem cuidadores com segurança e que profissionais tenham um ambiente organizado para gerenciar seus atendimentos. Contribuições: Arquitetura de banco de dados, desenvolvimento de componentes (full-stack) para buscar e agendar cuidadores. Desenvolvimento de chatbot com IA para suporte ao usuário.",
    link: "https://github.com/DevsDomain/D-care",
    image: `${baseUrl}/imagesProjects/dcare.gif`,
  },
  {
    id: 2,
    title: "D-FireTrack - ABP-FATEC 2025.1",
    description:
      "Uma solução completa para o mapeamento automático de cicatrizes de queimadas utilizando imagens dos satélites CBERS-4, CBERS-4A e Amazônia-1, combinadas com Deep Learning e processamento em nuvem. Contreibuições: Desenvolvimento de uma API stac para consulta e download de imagens de satélite, além da criação de pipelines de processamento em nuvem para análise e mapeamento de áreas queimadas.",
    link: "https://github.com/DevsDomain/D-FireTrack",
    image: `${baseUrl}/imagesProjects/dfiretrack.gif`,
  },
  {
    id: 3,
    title: "D-Nutri - ABP-FATEC 2024.2",
    description:
      "Allows users to record and monitor their daily intake of calories and nutrients, helping them control their diet and maintain their health. Contributions: Full-stack development of the web application, including user authentication, food database integration, and nutritional tracking features, and IoT integration for searching food items using barcode scanning.",
    link: "https://github.com/DevsDomain/D-Nutri",
    image: `${baseUrl}/imagesProjects/dnutri.png`,
  },
  {
    id: 4,
    title: "D-Tracker - ABP-FATEC 2024.1",
    description:
      "Ferramenta de gerenciamento para o gestor de projetos. Contribuições: Desenvolvimento full-stack da aplicação web, incluindo autenticação de usuários, criação e gerenciamento de projetos, tarefas e equipes, além de funcionalidades de acompanhamento de progresso e geração de relatórios.",
    link: "https://github.com/DevsDomain/D-Traker",
    image: `${baseUrl}imagesProjects/d-trackerLow.gif`,
  },
  {
    id: 5,
    title: "Bike4You - ABP-FATEC 2023.2",
    description:
      "A peer-to-peer web application that connects bicycle owners with renters, acting solely as an intermediary without handling payments. Contributions: Full-stack development of the web application, including user authentication, bike listing and searching functionalities, booking system, and user reviews, and layout and styling using Material-UI.",
    link: "https://github.com/DevsDomain/D-Traker",
    image: `${baseUrl}/imagesProjects/bike4you.png`,
  },
  {
    id: 6,
    title: "IBGE Localidades App",
    description:
      "Aplicativo React TS que lista regiões, estados e mesorregiões do Brasil utilizando a API de localidades do IBGE.",
    link: "https://github.com/abnercosta97/ibge-localidades-app",
    image: `${baseUrl}imagesProjects/ibge-localidadesLow.gif`,
  },
  {
    id: 7,
    title: "Resultado Loterias",
    description:
      "Aplicação Web para exibir últimos resultados das Loterias Caixas.",
    link: "https://github.com/abnercosta97/ativadade-praticaReact",
    image: `${baseUrl}imagesProjects/loteria.png`,
  },
  {
    id: 8,
    title: "Expert Treinamentos - ABP-FATEC 2023.1",
    description:
      "Sistema web que indique todos os processos e artefatos da metodologia ágil (Srum), a fim de que todos os seus colaboradores entendam e realizem o Scrum corretamente e de maneira padronizada. Contribuições: Desenvolvimento front-end da aplicação web, incluindo páginas informativas sobre Scrum, templates de artefatos, e guias de melhores práticas para equipes ágeis.",
    link: "https://github.com/Our-team-fatec/Expert-Treinamentos",
    image: `${baseUrl}imagesProjects/gif01.gif`,
  },
  // Adicione mais projetos conforme necessário
];
