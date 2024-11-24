import { HttpClient } from "../common/http";
import { noteApi } from "../feature/note/api/note.api";
import { projectApi } from "../feature/project/api/project.api";

export function initApis() {
  const httpClient = new HttpClient("http://localhost:8000");

  projectApi.setHttpClient(httpClient);
  noteApi.setHttpClient(httpClient);
}
