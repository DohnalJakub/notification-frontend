import ApiService from '../api/ApiService';

const BASE_CONTROLLER = 'event-person';

const GetById = async (id) => {
  try {
    return await ApiService.get(BASE_CONTROLLER + `/${id}`);
  } catch (error) {
    // Handle any errors
    console.error(error);
    throw error;
  }
};

const GetAll = () => {
  try {
    return ApiService.getAll(BASE_CONTROLLER);
  } catch (error) {
    // Handle any errors
    console.error(error);
    throw error;
  }
};

const Create = async (eventPerson) => {
  try {
    return await ApiService.create(BASE_CONTROLLER, eventPerson);
  } catch (error) {
    // Handle any errors
    console.error(error);
    throw error;
  }
};

const Update = async (eventPerson) => {
  try {
    return await ApiService.updatePut(BASE_CONTROLLER, eventPerson);
  } catch (error) {
    // Handle any errors
    console.error(error);
    throw error;
  }
};

const Delete = async (id) => {
  try {
    return await ApiService.remove(BASE_CONTROLLER, id);
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
  Update,
  Delete
};

export default EventPersonService;
