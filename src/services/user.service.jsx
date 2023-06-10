import client from '../api/Api';

const BASE_CONTROLLER = 'account';

const getUserById = (id) => {
  console.log(client);
  return client.get(BASE_CONTROLLER + `/get-user/${id}`);
};

const UserService = {
  getUserById
};

export default UserService;
