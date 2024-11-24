import { TNoteId } from "../entity/note";

export const routes = {
  catalog: () => "/",
  note: (id: TNoteId) => `/notes/${id}`,
};
