import { useMutation, useQueryClient } from "@tanstack/react-query";
import { projectApi } from "../api/project.api";
import { TProjectId } from "../../../entity/project";
import { PROJECT_QUERY_KEY } from "./project.query";

export function useProjectDeleteMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (id: TProjectId) => {
      const res = await projectApi.deleteProject(id);
      return res;
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: PROJECT_QUERY_KEY });
    },
  });

  return mutation;
}
