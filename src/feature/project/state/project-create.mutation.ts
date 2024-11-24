import { useMutation, useQueryClient } from "@tanstack/react-query";
import { projectApi } from "../api/project.api";
import { IProject } from "../../../entity/project";
import { PROJECT_QUERY_KEY } from "./project.query";

export function useProjectCreateMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (project: IProject) => {
      const res = await projectApi.create(project);
      return res;
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: PROJECT_QUERY_KEY });
    },
  });

  return mutation;
}
