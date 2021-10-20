export default class UserService {
  constructor(http) {
    this.http = http;
  }

  loginUser = async (username, password) => {
    return await this.http.fetch(`/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    });
  };

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
}
