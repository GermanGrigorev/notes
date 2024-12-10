import { user } from "@nextui-org/react";
import { ApiBase, HttpClient, REFRESH_URL } from "../../../common/api-base";
import { IUser } from "../../../entity/user";
import { tokenLs, type ITokenData } from "../state/token.ls";

const BASE_URL = "";

interface LoginData {
  login: string;
  password: string;
}

export interface ILoginError {
  status: 422;
  errors: {
    email?: "notFound" | "email must be an email" | string;
    password?: "incorrectPassword" | string;
  };
}

export interface IRegisterError {
  status: 422;
  errors: {
    email?: "emailAlreadyExists" | string;
    password?: string;
    name?: string;
  };
}

export interface RegisterData {
  login: string;
  password: string;
}

export class AuthApi extends ApiBase {
  setHttpClient(httpClient: HttpClient) {
    this._httpClient = httpClient;
    const tokenData = tokenLs.getValue();
    if (tokenData) {
      this.httpClient.setToken(tokenData.token);
    }
    // this.httpClient.initializeResponseInterceptor(() =>
    //   this.refresh(httpClient)
    // );
  }

  // private async refresh(
  //   httpClient: HttpClient
  // ): Promise<{ token: string } | null> {
  //   const tokenData = tokenLs.getValue();
  //   if (!tokenData) {
  //     return null;
  //   }

  //   try {
  //     httpClient.setToken(tokenData.refreshToken);
  //     const data = await httpClient.post<ITokenData>(REFRESH_URL);

  //     httpClient.setToken(data?.token ?? null);
  //     tokenLs.setValue(data ?? null);
  //     return data ?? null;
  //   } catch (e) {
  //     httpClient.clearToken();
  //     tokenLs.setValue(null);
  //     return null;
  //   }
  // }

  async login(data: LoginData): Promise<[unknown | null, ILoginError | null]> {
    try {
      const basicToken = btoa(
        unescape(encodeURIComponent(data.login + ":" + data.password))
      );
      this.httpClient.setToken(basicToken);

      const res = await this.httpClient.post(BASE_URL + "get_user", null, {
        params: data,
      });

      tokenLs.setValue({ token: basicToken });
      return [res, null];
    } catch (error) {
      return [null, error as ILoginError];
    }
  }

  async register(
    data: RegisterData
  ): Promise<[unknown | null, ILoginError | null]> {
    try {
      const res = await this.httpClient.post(BASE_URL + "add_user", null, {
        params: data,
      });

      const basicToken = btoa(
        unescape(encodeURIComponent(data.login + ":" + data.password))
      );
      console.log("--basicToken", basicToken);
      this.httpClient.setToken(basicToken);
      tokenLs.setValue({ token: basicToken });
      return [res, null];
    } catch (error) {
      console.log("--error", error);
      return [null, error as IRegisterError];
    }
  }

  async logout() {
    tokenLs.setValue(null);
    this.httpClient.clearToken();
  }
}

export const authApi = new AuthApi();
