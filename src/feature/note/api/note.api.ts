import { HttpClient } from "../../../common/http";
import { INote, TNoteId } from "../../../entity/note";
import { IProject, TProjectId } from "../../../entity/project";

const BASE_URL = "/api/v1/notes";

export class NoteApi {
  private httpClient!: HttpClient;

  setHttpClient(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async get(id: TNoteId): Promise<INote[]> {
    return this.httpClient.get<INote[]>(BASE_URL + `/${id}`);
  }

  async create(data: INote) {
    return this.httpClient.post(BASE_URL, data);
  }

  async delete(id: TNoteId) {
    return this.httpClient.delete(BASE_URL + `/${id}`);
  }
}

export const noteApi = new NoteApi();
