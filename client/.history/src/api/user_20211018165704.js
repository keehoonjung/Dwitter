export default class UserService {
  constructor(http) {
    this.http = http;
  }

  getUser = async (id) => {
    return await this.http.fetch(`/users/${id}`, {
      method: "GET",
    });
  };

  createUser = async ({ username, password, name, email, url }) => {
    return await this.http.fetch(`/users`, {
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

const baseUrl = "http://localhost:8080/users";
