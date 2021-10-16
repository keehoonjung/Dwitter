const url = "http://localhost:8080/users";

export const getUser = async (id) => {
  const user = await fetch(`${url}/${id}`) //
    .then((res) => res.json())
    .then((res) => res);

  return user;
};

export const createUser = async ({ username, password, name, email, url }) => {
  const user = await fetch(url, {
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
