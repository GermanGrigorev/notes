import { useMutation, useQueryClient } from "@tanstack/react-query";
import { projectApi } from "../api/project.api";
import { PROJECT_QUERY_KEY } from "./project.query";

export function useProjectCreateMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (title: string) => {
      const res = await projectApi.create(title);
      return res;
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: PROJECT_QUERY_KEY });
    },
  });

  return mutation;
}
