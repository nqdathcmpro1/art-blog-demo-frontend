import instance from ".";

export const createUser = (newUser) => instance.post("/user/register", newUser);

export const loginUser = (user) => instance.post("/user/login", user);

export const getAuthorUser = (author) => instance.get(`/user/${author}`);

export const logoutUser = () => instance.get("/user/logout");

export const editUser = (userId, editedUser) =>
  instance.patch(`/user/edit?id=${userId}`, editedUser);

export const refreshToken = () => instance.get("/user/refresh");
