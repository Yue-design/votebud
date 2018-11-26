import {getSitesUrl} from './url';
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

class SiteApi {

  static async getAllSites() {
    let res = await getMyAxios().get(getSitesUrl());
    let sites = Object.assign([], res.data);
    return sites;
  }

  static async saveSite(site) {
    let res = await getMyAxios().post(getSitesUrl(), site);
    const savedSite = res.data;
    return savedSite;
  }

}

export default SiteApi;
