import axios from 'axios';

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    // block to handle success case
    return response;
  },
  function (error) {
    console.log(error);
    // block to handle error case
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url === 'http://dummydomain.com/auth/token'
    ) {
      // Added this condition to avoid infinite loop

      // Redirect to any unauthorised route to avoid infinite loop...
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      // Code inside this block will refresh the auth token

      originalRequest._retry = true;
      const refreshToken = 'xxxxxxxxxx'; // Write the  logic  or call here the function which is having the login to refresh the token.
      return axios
        .post('/auth/token', {
          refresh_token: refreshToken
        })
        .then((res) => {
          if (res.status === 201) {
            localStorage.setItem('auth_token', res.data);
            axios.defaults.headers.common['Authorization'] =
              'Bearer ' + localStorage.getItem('auth_token');
            return axios(originalRequest);
          }
        });
    }
    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch
};
