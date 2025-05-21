const baseUrl = import.meta.env.BASE_URL; // Obtém a base correta para produção

const skillsData = [
  { name: "TypeScript", icon: `${baseUrl}icon/typescript-icon.png` },
  { name: "JavaScript", icon: `${baseUrl}icon/javascript-icon.png` },
  { name: "HTML", icon: `${baseUrl}icon/html-icon.png` },
  { name: "CSS", icon: `${baseUrl}icon/css-icon.png` },
  { name: "React", icon: `${baseUrl}icon/react-icon.png` },
  { name: "MongoDB", icon: `${baseUrl}icon/mongodb-icon.png` },
  { name: "PostgreSQL", icon: `${baseUrl}icon/psql-icon.png` },
];

export default skillsData;
