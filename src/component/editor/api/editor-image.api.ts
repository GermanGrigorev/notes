import { ApiBase } from "../../../common/api-base";

const BASE_URL = "";

export class EditorImageApi extends ApiBase {
  async create(file: File): Promise<{ success: 1; file: { url: string } }> {
    const res = await this.httpClient.post<{ imgUrl: string }>(
      BASE_URL + "/create_img",
      { img: file },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return {
      success: 1,
      file: {
        url: res.imgUrl,
      },
    };
  }
}

export const editorImageApi = new EditorImageApi();
