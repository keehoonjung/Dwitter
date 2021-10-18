export default class UserService {
  constructor(http) {
    this.http = http;
  }
}

const baseUrl = "http://localhost:8080/users";

export const getUser = async (id) => {
  const user = await fetch(`${baseUrl}/${id}`) //
    .then((res) => res.json())
    .then((res) => res);

  return user;
};

export const createUser = async ({ username, password, name, email, url }) => {
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
