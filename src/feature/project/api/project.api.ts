import { ApiBase, OmitId } from "../../../common/api-base";
import { IProject, TProjectId } from "../../../entity/project";
import { TUserId } from "../../../entity/user";

const BASE_URL = "";

export class ProjectApi extends ApiBase {
  async getAll(user_id: TUserId): Promise<IProject[]> {
    return this.httpClient.get<IProject[]>(BASE_URL + "/get_all_proj", {
      params: { user_id },
    });
  }

  async get(proj_id: TProjectId): Promise<IProject> {
    return this.httpClient.get<IProject>(BASE_URL + "/get_proj", {
      params: { proj_id },
    });
  }

  async create(owner_id: TUserId, data: OmitId<IProject>) {
    return this.httpClient.post(BASE_URL + "/add_proj", {
      params: { owner_id, title: data.title },
    });
  }

  async delete(proj_id: TProjectId): Promise<IProject> {
    return this.httpClient.delete<IProject>(BASE_URL + "/delete_proj", {
      params: { proj_id },
    });
  }
}

export const projectApi = new ProjectApi();
