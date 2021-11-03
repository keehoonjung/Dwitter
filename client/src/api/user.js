export default class UserService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }
  signUp = async (user) => {
    const data = await this.http.fetch(`/auth/signup`, {
      method: "POST",
      body: JSON.stringify(user),
    });
    this.tokenStorage.saveToken(data.token);
    return data;
  };

  login = async ({ username, password }) => {
    const data = await this.http.fetch(`/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    });
    this.tokenStorage.saveToken(data.token);
    return data;
  };

  me = async () => {
    const token = this.tokenStorage.getToken();
    if (!token) {
      return null;
    }
    try {
      const data = await this.http.fetch("/auth/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      return data;
    } catch (e) {
      this.tokenStorage.clearToken();
      return null;
    }
  };

  async logout() {
    this.tokenStorage.clearToken();
  }
}
