import instance from ".";

export const getArts = (page) => instance.get(`/art?page=${page}`);

export const getManageArts = (authorId) =>
  instance.get(`/art/manage?authorId=${authorId}`);

export const getSingleArt = (id) => instance.get(`/art/${id}`);

export const getArtsBySearch = (search) =>
  instance.get(`/art/search?search=${search}`);

export const getAuthorArts = (author) =>
  instance.get(`/art/gallery?author=${author}`);

export const createArt = (authorId, newArt) =>
  instance.post(`/art?authorId=${authorId}`, newArt);

export const deleteArt = (id) => instance.delete(`/art/${id}`);

export const editArt = (editId, updatedArt) =>
  instance.patch(`/art/${editId}`, updatedArt);
