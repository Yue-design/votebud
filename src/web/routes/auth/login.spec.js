let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
require('jasmine-co').install();
let request = require('supertest');

var bc = require("bcrypt-nodejs");

let LoginRoute = require('./login');
let Helpers = require("../../../../testHelpers/helpers");

describe('Authentication', function () {

  describe('login success', function () {
    // more specs

    let app;
    let db;
    let helpers;

    beforeAll(async function(done) {

      helpers = new Helpers();
      db = await helpers.connectToDb();
      app = helpers.getExpressApp();

      LoginRoute(app, db, "abc");

      await db.collection('users').insertOne({
        username: "a@a.com",
        hashedPassword: bc.hashSync('a')
      });

      done();

    });

    afterAll(async function(done) {
      await helpers.closeDb(db);
      done();
    });

    test('can login ', async () => {
      let loginInfo = {
        username: "a@a.com",
        password: 'a'
      };
      let result = await request(app).post('/auth/login').send(loginInfo);
      expect(result.statusCode).toEqual(200);
    });

    test('return token and userId and user at success login', async (done) => {
      let loginInfo = {
        username: "a@a.com",
        password: 'a'
      };

      let result = await request(app).post('/auth/login').send(loginInfo);
      expect(result.statusCode).toEqual(200);
      expect(result.body.token).toBeDefined();
      expect(result.body.userId).toBeDefined();
      expect(result.body.user).toBeDefined();
      done();

    });


  });

  describe('login failure', function () {
    // more specs

    let app;
    let db;
    let helpers;

    beforeAll(async function(done) {

      helpers = new Helpers();
      db = await helpers.connectToDb();
      app = helpers.getExpressApp();

      LoginRoute(app, db, "abc");

      await db.collection('users').insertOne({
        username: "a@a.com",
        hashedPassword: bc.hashSync('a')
      });

      done();

    });

    afterAll(async function(done) {
      await helpers.closeDb(db);
      done();
    });

    test('username not found returns 401', async (done) => {

      let loginInfo = {
        username: "a",
        password: 'a'
      };

      let result = await request(app).post('/auth/login').send(loginInfo);
      expect(result.statusCode).toEqual(401);
      expect(result.body.error).toEqual('username not found');
      done();
    });

    test('password wrong return 401', async (done) => {
      let loginInfo = {
        username: "a@a.com",
        password: 'b'
      };

      let result = await request(app).post('/auth/login').send(loginInfo);
      expect(result.body.error).toEqual("wrong password");
      expect(result.statusCode).toEqual(401);

      done();

    });




  });


});
