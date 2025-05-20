// src/hooks/useProjects.ts

import { useState, useEffect } from "react";
import { Project, projects } from "../service/projects";

export const useProjects = () => {
  const [projectList, setProjectList] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula uma chamada de API
    setTimeout(() => {
      setProjectList(projects);
      setLoading(false);
    }, 500); // 1 segundo de delay
  }, []);

  return { projectList, loading };
};
