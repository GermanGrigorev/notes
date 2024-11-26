import { useMutation, useQueryClient } from "@tanstack/react-query";
import { noteApi } from "../api/note.api";
import { getNoteQueryKey } from "./note.query";
import { INote } from "../../../entity/note";

export function useNoteUpdateMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (note: INote) => {
      const res = await noteApi.update(note);
      return res;
    },
    onSuccess: (_, note) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: getNoteQueryKey(note.id) });
    },
  });

  return mutation;
}
