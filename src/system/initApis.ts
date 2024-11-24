import { HttpClient } from "../common/http";
import { projectApi } from "../feature/project/api/project.api";

export function initApis() {
  const httpClient = new HttpClient("backendURL");

  projectApi.setHttpClient(httpClient);
}
