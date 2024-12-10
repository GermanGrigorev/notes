import { HttpClient } from "../common/api-base";
import { editorImageApi } from "../component/editor";
import { authApi } from "../feature/auth/api/auth.api";
import { tokenLs } from "../feature/auth/state/token.ls";
import { noteApi } from "../feature/note/api/note.api";
import { projectApi } from "../feature/project/api/project.api";

export function initApis() {
  const httpClient = new HttpClient(
    "https://v1eq-wc6e-x259.gw-1a.dockhost.net/"
  );
  // const httpClient = new HttpClient("http://localhost:5003");

  const token = tokenLs.getValue();
  if (token) {
    httpClient.setToken(token.token);
  }

  authApi.setHttpClient(httpClient);
  projectApi.setHttpClient(httpClient);
  noteApi.setHttpClient(httpClient);
  editorImageApi.setHttpClient(httpClient);
}
