import { useQuery } from "@tanstack/react-query";
import { noteApi } from "../api/note.api";
import { TNoteId } from "../../../entity/note";

export const getNoteQueryKey = (id: TNoteId) => ["note", id];

export function useNoteQuery({ id }: { id: TNoteId }) {
  const query = useQuery({
    queryKey: getNoteQueryKey(id),
    queryFn: async () => {
      const note = await noteApi.get(id);
      console.log("--note", note);
      return note;
    },
  });

  return query;
}
