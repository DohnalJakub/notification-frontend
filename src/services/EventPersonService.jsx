import client from '../api/Api';

const BASE_CONTROLLER = 'event-person';

const GetById = async (id) => {
  try {
    return await client.get(BASE_CONTROLLER + `/${id}`);
  } catch (error) {
    // Handle any errors
    console.error(error);
    throw error;
  }
};

const GetAll = () => {
  try {
    return client.get(BASE_CONTROLLER);
  } catch (error) {
    // Handle any errors
    console.error(error);
    throw error;
  }
};

const Create = async (eventPerson) => {
  try {
    return await client.post(BASE_CONTROLLER, eventPerson);
  } catch (error) {
    // Handle any errors
    console.error(error);
    throw error;
  }
};

const Update = async (eventPerson) => {
  try {
    return await client.put(BASE_CONTROLLER + `/${eventPerson.id}`, eventPerson);
  } catch (error) {
    // Handle any errors
    console.error(error);
    throw error;
  }
};

const EventPersonService = {
  GetById,
  GetAll,
  Create,
  Update
};

export default EventPersonService;
