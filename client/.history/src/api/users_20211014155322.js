const url = "http://localhost:8080/users";

export const getUser = async (id, password) => {
  const user = await fetch(`${url}/${id}`) //
    .then((res) => res.json())
    .then((res) => res);

  return user;
};
