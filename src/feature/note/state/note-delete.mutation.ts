import { useMutation, useQueryClient } from "@tanstack/react-query";
import { noteApi } from "../api/note.api";
import { TProjectId } from "../../../entity/project";
import { getNoteQueryKey } from "./note.query";

export function useNoteDeleteMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (id: TProjectId) => {
      const res = await noteApi.delete(id);
      return res;
    },
    onSuccess: (_, id) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: getNoteQueryKey(id) });
    },
  });

  return mutation;
}
