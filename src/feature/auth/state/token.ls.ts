const TOKEN_LS_KEY = "token";

export interface ITokenData {
  token: string;
}

class TokenLs {
  constructor() {}

  setValue(data: ITokenData | null) {
    if (data) {
      localStorage.setItem(TOKEN_LS_KEY, JSON.stringify(data));
    } else {
      localStorage.removeItem(TOKEN_LS_KEY);
    }
  }

  getValue(): ITokenData | null {
    const stored = localStorage.getItem(TOKEN_LS_KEY);

    if (stored) return JSON.parse(stored);
    return null;
  }
}

export const tokenLs = new TokenLs();
