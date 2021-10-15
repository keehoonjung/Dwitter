const url = "http://localhost:8080/users";

const getUser = async (id, password) => {
  const user = await fetch(`${url}/${id}`) //
    .then((res) => res.json())
    .then((res) => res);

  return user;
};
