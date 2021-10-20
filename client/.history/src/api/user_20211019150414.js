export default class UserService {
  constructor(http) {
    this.http = http;
  }

  getUser = async (username) => {
    return await this.http.fetch(`/users/${username}`, {
      method: "GET",
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
