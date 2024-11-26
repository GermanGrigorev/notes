import { HttpClient } from "./http-client.service";

export class ApiBase {
  private _httpClient?: HttpClient;

  get httpClient(): HttpClient {
    if (!this._httpClient) {
      throw new Error("Missing httpClient");
    }
    return this._httpClient;
  }

  setHttpClient(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }
}
