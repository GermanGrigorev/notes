import { useQuery } from "@tanstack/react-query";
import { projectApi } from "../api/project.api";
import { DEFAULT_USER_ID } from "../../../entity/user";

export const PROJECT_QUERY_KEY = ["project"];

export function useProjectAllQuery() {
  const query = useQuery({
    queryKey: PROJECT_QUERY_KEY,
    queryFn: async () => {
      const data = await projectApi.getAll(DEFAULT_USER_ID);
      if (!data) return [];
      return data.reverse().map((project) => ({
        ...project,
        pages: project.pages?.reverse(),
      }));
    },
  });

  return query;
}
