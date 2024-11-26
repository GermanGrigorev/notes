import { ApiBase, OmitId } from "../../../common/api-base";
import { IProject, TProjectId } from "../../../entity/project";
import { TUserId } from "../../../entity/user";

const BASE_URL = "";

export class ProjectApi extends ApiBase {
  async getAll(user_id: TUserId): Promise<IProject[]> {
    try {
      const res = await this.httpClient.get<{ projects: IProject[] }>(
        BASE_URL + "/get_all_proj",
        {
          params: { user_id },
        }
      );
      console.log(res);
      return res.projects;
    } catch (e: any) {
      console.error("e++++++++rr", e.message);
    }
    return [];
  }

  async get(proj_id: TProjectId): Promise<IProject> {
    return this.httpClient.get<IProject>(BASE_URL + "/get_proj", {
      params: { proj_id },
    });
  }

  async create(owner_id: TUserId, title: string) {
    return this.httpClient.post(BASE_URL + "/add_proj", null, {
      params: { owner_id, title },
    });
  }

  async delete(proj_id: TProjectId): Promise<IProject> {
    return this.httpClient.delete<IProject>(BASE_URL + "/delete_proj", {
      params: { proj_id },
    });
  }
}

export const projectApi = new ProjectApi();
