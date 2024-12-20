import { useMutation, useQueryClient } from "@tanstack/react-query";
import { noteApi } from "../api/note.api";
import { getNoteQueryKey } from "./note.query";
import { INote } from "../../../entity/note";
import { OmitId } from "../../../common/api-base";

export function useNoteCreateMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (note: OmitId<INote>) => {
      const res = await noteApi.create(note);
      return res;
    },
    onSuccess: () => {
      // Invalidate and refetch
      // queryClient.invalidateQueries({ queryKey: getNoteQueryKey });
    },
  });

  return mutation;
}
