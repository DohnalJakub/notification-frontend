const GetToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
    return user.token;
  } else {
    return undefined;
  }
};

const TokenService = {
  GetToken
};

export default TokenService;
