import {getSitesUrl, getUserUrl} from './url';
import axios from 'axios';

const myAxios = axios.create({
  headers: {
    authorization: localStorage.getItem("token")
  }
});

const getMyAxios = () => {
  const token = localStorage.getItem("token");
  const myAxios = axios.create({
    headers: {
      authorization: token
    }
  });
  return myAxios;
};

class UserApi {

  static async getUsernameById(id) {
    let res = await axios.get(getUserUrl() + "/username/" + id);
    let username = res.data.username;
    return username;
  }

}

export default UserApi;
