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

const Create = async (company) => {
  try {
    return await ApiService.create(BASE_CONTROLLER, company);
  } catch (error) {
    // Handle any errors
    console.error(error);
    throw error;
  }
};

const Update = async (company) => {
  try {
    return await ApiService.updatePut(BASE_CONTROLLER, company);
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

const CompanyService = {
  GetById,
  GetAll,
  Create,
  Update,
  Delete
};

export default CompanyService;
