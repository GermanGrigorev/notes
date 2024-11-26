import axios from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

export const REFRESH_URL = "/api/v1/auth/refresh";

export class HttpClient {
  private instance: AxiosInstance;

  constructor(
    baseURL: string,
    private token?: string | null
  ) {
    this.instance = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.initializeRequestInterceptor();
  }

  private initializeRequestInterceptor() {
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        if (this.token) {
          config.headers["Authorization"] = `Bearer ${this.token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  public initializeResponseInterceptor(
    onRefreshToken: () => Promise<{ token: string } | null>
  ) {
    this.instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        console.log(error.config);
        const config = error?.config;

        if (
          error?.response?.status === 401 &&
          !config?.sent &&
          config.url !== REFRESH_URL
        ) {
          config.sent = true;

          const result = await onRefreshToken();

          if (result?.token) {
            config.headers["Authorization"] = `Bearer ${result.token}`;
          }

          return axios(config);
        }
        return Promise.reject(error);
      }
    );
  }

  public setToken(token: string) {
    this.token = token;
  }

  public clearToken() {
    this.token = null;
  }

  private handleResponse<T>(response: AxiosResponse<T>): T {
    return response.data;
  }

  private handleError(error: any): never {
    console.error("API Error:", error);
    throw error.response?.data || error.message || "Unknown API error";
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.instance.get<T>(url, config);
      return this.handleResponse(response);
    } catch (error) {
      this.handleError(error);
    }
  }

  public async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response = await this.instance.post<T>(url, data, config);
      return this.handleResponse(response);
    } catch (error) {
      this.handleError(error);
    }
  }

  public async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T | never> {
    try {
      const response = await this.instance.put<T>(url, data, config);
      return this.handleResponse(response);
    } catch (error) {
      this.handleError(error);
    }
  }

  public async patch<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T | never> {
    try {
      const response = await this.instance.patch<T>(url, data, config);
      return this.handleResponse(response);
    } catch (error) {
      this.handleError(error);
    }
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.instance.delete<T>(url, config);
      return this.handleResponse(response);
    } catch (error) {
      this.handleError(error);
    }
  }
}
