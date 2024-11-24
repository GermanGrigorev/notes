import { useQuery } from "@tanstack/react-query";
import { projectApi } from "../api/project.api";

export const PROJECT_QUERY_KEY = ["project"];

export function useProjectAllQuery() {
  const query = useQuery({
    queryKey: PROJECT_QUERY_KEY,
    queryFn: async () => {
      const projects = await projectApi.getAll();
      return projects;
    },
  });

  return query;
}
