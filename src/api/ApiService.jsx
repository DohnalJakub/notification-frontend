import client from './Api';

const getAll = (urlPart) => {
  try {
    return client.get(urlPart);
  } catch (error) {
    console.log(error);
  }
};

const get = (urlPart, id) => {
  return client.get(`${urlPart}/${id}`);
};

const create = (urlPart, data) => {
  return client.post(urlPart, data);
};

const updatePut = (urlPart, id, data) => {
  return client.put(`${urlPart}/${id}`, data);
};

const updatePatch = (urlPart, id, data) => {
  return client.patch(`${urlPart}/${id}`, data);
};

const remove = (urlPart, id) => {
  return client.delete(`${urlPart}/${id}`);
};

const ApiService = {
  getAll,
  get,
  create,
  updatePut,
  updatePatch,
  remove
};

export default ApiService;
