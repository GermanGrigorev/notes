import { HttpClient } from "../../../common/http";
import { IProject, TProjectId } from "../../../entity/project";

const BASE_URL = "/api/v1/projects";

export class ProjectApi {
  private httpClient!: HttpClient;

  setHttpClient(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async getProjectAll(): Promise<IProject[]> {
    return this.httpClient.get<IProject[]>(BASE_URL);
  }

  async createProject(data: IProject) {
    return this.httpClient.post(BASE_URL, data);
  }

  async deleteProject(id: TProjectId) {
    return this.httpClient.delete(BASE_URL + `/${id}`);
  }
}

export const projectApi = new ProjectApi();
