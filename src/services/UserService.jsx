import client from '../api/Api';

const BASE_CONTROLLER = 'account';

const GetById = (id) => {
  return client.get(BASE_CONTROLLER + `/get-user/${id}`);
};

const UserService = {
  GetById
};

export default UserService;
