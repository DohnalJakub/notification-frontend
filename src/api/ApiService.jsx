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

const updatePut = (urlPart, data) => {
  return client.put(`${urlPart}/${data.id}`, data);
};

const updatePatch = (urlPart, data) => {
  return client.patch(`${urlPart}/${data.id}`, data);
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
