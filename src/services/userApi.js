import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export class UserAPI {
  static async registerUser(user) {
    const { data } = await axios.post('/users/signup', user);
    token.set(data.token);
    return data;
  }

  static async userLogIn(user) {
    const { data } = await axios.post('/users/login', user);
    token.set(data.token);
    return data;
  }

  static async userLogOut() {
    const { data } = await axios.post('/users/logout');
    token.unset();
    return data;
  }

  static async currentUser(_, thunkAPI) {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    const { data } = await axios.get('/users/current');

    return data;
  }
}
