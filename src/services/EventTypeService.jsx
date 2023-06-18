import client from '../api/Api';

const BASE_CONTROLLER = 'event-type';

const GetAll = () => {
  return client.get(BASE_CONTROLLER);
};

const GetById = (id) => {
  console.log(client);
  return client.get(BASE_CONTROLLER + `/${id}`);
};

const Create = (newItem) => {
  return client.get(BASE_CONTROLLER, newItem);
};

const Update = (updateItem) => {
  return client.put(BASE_CONTROLLER, updateItem);
};

const Delete = (id) => {
  return client.delete(BASE_CONTROLLER + `/${id}`);
};

const EventTypeService = {
  GetAll,
  GetById,
  Create,
  Update,
  Delete
};

export default EventTypeService;
