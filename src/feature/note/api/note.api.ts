import { ApiBase, OmitId } from "../../../common/api-base";
import { INote, TNoteId } from "../../../entity/note";
import { TProjectId } from "../../../entity/project";

const BASE_URL = "";

type Page<T> = { page: T };

export class NoteApi extends ApiBase {
  async getAll(project_id: TProjectId): Promise<INote[]> {
    const res = await this.httpClient.get<Page<INote[]>>(
      BASE_URL + "/get_all_proj",
      {
        params: { project_id },
      }
    );
    return res.page;
  }

  async get(id: TNoteId): Promise<INote> {
    const res = await this.httpClient.get<Page<INote>>(BASE_URL + "/get_page", {
      params: { page_id: id },
    });
    return res.page;
  }

  async create(note: OmitId<INote>): Promise<TNoteId> {
    const res = await this.httpClient.post<{ pageId: TNoteId }>(
      BASE_URL + "/add_page",
      note.data,
      {
        params: {
          owner_id: note.owner_id,
          project_id: note.project_id,
          title: note.title,
        },
      }
    );
    return res.pageId;
  }

  async update(note: INote) {
    return this.httpClient.post(BASE_URL + "/edit_page", note.data, {
      params: {
        id: note.id,
        owner_id: note.owner_id,
        project_id: note.project_id,
        title: note.title,
      },
    });
  }

  async delete(id: TNoteId) {
    return this.httpClient.delete(BASE_URL + "/delete_page", {
      params: {
        page_id: id,
      },
    });
  }
}

export const noteApi = new NoteApi();
