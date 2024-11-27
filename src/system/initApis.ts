import { HttpClient } from "../common/api-base";
import { editorImageApi } from "../component/editor";
import { noteApi } from "../feature/note/api/note.api";
import { projectApi } from "../feature/project/api/project.api";

export function initApis() {
  const httpClient = new HttpClient("http://localhost:5003");

  projectApi.setHttpClient(httpClient);
  noteApi.setHttpClient(httpClient);
  editorImageApi.setHttpClient(httpClient);
}
