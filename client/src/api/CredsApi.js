import {getLoginUrl, getRegisterUrl} from './url';
import axios from 'axios';
import assert from 'assert';

const myAxios = axios.create({
  // headers: {
  //   authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1OWI0OTU0MzBlNWViOTIzOTA4ZDRkMTAiLCJpYXQiOjE1MDUwMjMzOTB9.fz6dgmYx-_ZABPUHqf6eta79wNPBtGFe89qyfH8Hj9U'
  // }
});

class CredsApi {

  static async login(creds) {
    assert(creds.username, "username is required");
    assert(creds.password, "password is required");

    try {
      let res = await myAxios.post(getLoginUrl(), creds);
      return {
        success: true,
        data: Object.assign({}, res.data)
      };
    } catch (err) {
      return {
        success: false,
        err
      };
    }

  }

  static async register(reg) {
    assert(reg.username, "username is required");
    assert(reg.password, "password is required");
    assert(reg.confirm, "confirm is required");

    try {
      await myAxios.post(getRegisterUrl(), reg);
      return {
        success: true
      };
    } catch (err) {
      const res = err.response;
      const error = res.data.error;
      return {
        success: false,
        error
      };
    }

  }

}

export default CredsApi;
