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
    const user = await fetch(baseUrl, {
      method: "post",
      body: JSON.stringify({
        username,
        password,
        name,
        email,
        url,
      }),
    }) //
      .then((res) => res.json())
      .then((res) => res);

    return user;
  };
}

const baseUrl = "http://localhost:8080/users";
