let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
require('jasmine-co').install();
let sinon = require('sinon');
let request = require('supertest');

let SitesRoute = require('./sites');
let Helpers = require("../../../testHelpers/helpers");

describe('Sites Route', function () {
  describe('Post A Site', function () {
    let app;
    let db;
    let helpers;

    beforeAll(async function(done) {

      helpers = new Helpers();
      db = await helpers.connectToDb();
      app = helpers.getExpressApp();

      SitesRoute(app, db);

      done();

    });

    afterAll(async function(done) {
      await helpers.closeDb(db);
      done();
    });

    test('can post a site if authorization is correct', async (done) => {
      const res = await request(app).post('/sites')
        .set("authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1OWI0OTU0MzBlNWViOTIzOTA4ZDRkMTAiLCJpYXQiOjE1MDUwMjMzOTB9.fz6dgmYx-_ZABPUHqf6eta79wNPBtGFe89qyfH8Hj9U")
        .send({
        "name": "AAA",
        "href": "aaa",
        "lang": "english"
      });
      expect(res.status).toEqual(200);
      done();
    });

    test('cannot post a site if authorization is empty', async (done) => {
      const res = await request(app).post('/sites').send({
        "name": "AAA",
        "href": "aaa",
        "lang": "english"
      });
      expect(res.status).toEqual(401);
      done();
    });



  });



});
