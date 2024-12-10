import { useQuery } from "@tanstack/react-query";
import { projectApi } from "../api/project.api";

export const PROJECT_QUERY_KEY = ["project"];

export function useProjectAllQuery() {
  const query = useQuery({
    queryKey: PROJECT_QUERY_KEY,
    queryFn: async () => {
      const data = await projectApi.getAll();
      if (!data) return [];
      return data.reverse().map((project) => ({
        ...project,
        pages: project.pages?.reverse(),
      }));
    },
  });

  return query;
}
