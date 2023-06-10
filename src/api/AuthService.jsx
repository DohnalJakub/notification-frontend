import client from './Api';

const register = (email, password) => {
  try {
    return client
      .post('/authenticate/register', {
        email,
        password
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  } catch (error) {
    console.log(error);
  }
};

const login = (email, password) => {
  try {
    return client
      .post('/authenticate/login', {
        username: email,
        password
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  } catch (error) {
    console.log(error);
  }
};

const logout = () => {
  localStorage.removeItem('user');
  window.location.reload();
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser
};

export default AuthService;
