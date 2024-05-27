import Cookies from 'js-cookie';

const deleteAuthToken = () => {
  Cookies.remove('accessToken');
  Cookies.remove('refreshTokens');
};

export default deleteAuthToken;
