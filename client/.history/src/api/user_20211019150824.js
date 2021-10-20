export default class UserService {
  constructor(http) {
    this.http = http;
  }
  createUser = async ({ username, password, name, email, url }) => {
    return await this.http.fetch(`/auth/signup`, {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        name,
        email,
        url,
      }),
    });
  };

  loginUser = async (username, password) => {
    return await this.http.fetch(`/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    });
  };

  me = async () => {
    return await this.http.fetch("/auth/me", {
      method: "GET",
    });
  };
}
