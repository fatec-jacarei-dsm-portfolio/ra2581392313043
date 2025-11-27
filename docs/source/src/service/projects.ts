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
    title: "D-Care",
    description:
      "D-Care é uma plataforma criada para conectar idosos e suas famílias a cuidadores qualificados. O sistema integra validação profissional (CRM/COREN), agendamento seguro, perfis completos de cuidadores e suporte assistido por IA, tudo isso com foco em transparência, segurança e conformidade total com a LGPD. O objetivo é oferecer uma experiência simples e confiável — permitindo que famílias encontrem cuidadores com segurança e que profissionais tenham um ambiente organizado para gerenciar seus atendimentos.",
    link: "https://github.com/DevsDomain/D-care",
    image: `${baseUrl}/imagesProjects/dcare.gif`,
  },
  {
    id: 2,
    title: "D-Nutri",
    description:
      "Allows users to record and monitor their daily intake of calories and nutrients, helping them control their diet and maintain their health.",
    link: "https://github.com/DevsDomain/D-Nutri",
    image: `${baseUrl}/imagesProjects/dnutri.png`,
  },
  {
    id: 3,
    title: "D-Tracker",
    description: "Ferramenta de gerenciamento para o gestor de projetos.",
    link: "https://github.com/DevsDomain/D-Traker",
    image: `${baseUrl}imagesProjects/d-trackerLow.gif`,
  },
  {
    id: 4,
    title: "Bike4You",
    description:
      "A peer-to-peer web application that connects bicycle owners with renters, acting solely as an intermediary without handling payments.",
    link: "https://github.com/DevsDomain/D-Traker",
    image: `${baseUrl}/imagesProjects/bike4you.png`,
  },
  {
    id: 5,
    title: "IBGE Localidades App",
    description:
      "Aplicativo React TS que lista regiões, estados e mesorregiões do Brasil utilizando a API de localidades do IBGE.",
    link: "https://github.com/abnercosta97/ibge-localidades-app",
    image: `${baseUrl}imagesProjects/ibge-localidadesLow.gif`,
  },
  {
    id: 6,
    title: "Resultado Loterias",
    description:
      "Aplicação Web para exibir últimos resultados das Loterias Caixas.",
    link: "https://github.com/abnercosta97/ativadade-praticaReact",
    image: `${baseUrl}imagesProjects/loteria.png`,
  },
  // Adicione mais projetos conforme necessário
];
