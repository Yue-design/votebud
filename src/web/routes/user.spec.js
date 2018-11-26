let request = require('supertest');

let UserRoute = require('./user');
let Helpers = require("../../../testHelpers/helpers");

describe('user route', function () {

  // describe('get username with an id - user does not exist', function () {
  //
  //   let app;
  //   let db;
  //   let helpers;
  //
  //   beforeAll(async function(done) {
  //
  //     helpers = new Helpers();
  //     db = await helpers.connectToDb();
  //     app = helpers.getExpressApp();
  //
  //     UserRoute(app, db);
  //
  //     done();
  //
  //   });
  //
  //   afterAll(async function(done) {
  //     await helpers.closeDb(db);
  //     done();
  //   });
  //
  //   test('return error', async function (done) {
  //     const res = await request(app).get("/username/aaa");
  //     expect(res.statusCode).toEqual(400);
  //     expect(res.body.error).toEqual("cannot find the user");
  //     done();
  //
  //   });
  // });


  describe.only('get username with an id - success', function () {

    let app;
    let db;
    let helpers;

    beforeAll(async function(done) {

      helpers = new Helpers();
      db = await helpers.connectToDb();
      app = helpers.getExpressApp();
      await helpers.insertDummyUser1(db);
      UserRoute(app, db);

      done();

    });

    afterAll(async function(done) {
      await helpers.closeDb(db);
      done();
    });

    test('get the username', async function (done) {
      const res = await request(app).get("/username/56955ca46063c5600627f393");
      expect(res.statusCode).toEqual(200);
      expect(res.body.username).toBeDefined();
      done();

    });
  });


});
