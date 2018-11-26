
let Registration = require("./lib/Registration");
let Authentication = require('./lib/Authentication');

let authCheck = require('./passport/auth-check');
let DBWrapper = require('./DBWrapper');

let Membership = function (db, jwt_secret) {
  let registration = new Registration(db);
  let authentication = new Authentication(db, jwt_secret);
  let dbWrapper = new DBWrapper(db);

  this.register = async function(args) {

    let result = await registration.applyMembership(args);
    return result;

  };

  this.authenticate = async function(creds) {
    let result = await authentication.authenticate(creds);
    return result;
  };

  this.getUsernameById = async function (id) {

    const user = await dbWrapper.findUserById(id);
    if (user === null) {
      throw "cannot find the user";
    }
    const username = user.username;
    return username;

  };

  return this;
};

module.exports = {
  Membership,
  authCheck
};
