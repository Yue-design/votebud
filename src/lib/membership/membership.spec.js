let chai = require('chai');
let should = chai.should();
// let exepct = chai.expect;
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let MongoClient = require('mongodb').MongoClient;
let Helpers = require('../../../testHelpers/helpers');

/* eslint-disable no-console */

let Membership = require('./index').Membership;

describe('membership', function () {

    describe('Get username with user id', function () {
      let db;
      let membership;
      let registerResult;
      let helpers;
      let userId;

      beforeAll(async function(done) {
        helpers = new Helpers();
        db = await helpers.connectToDb();
        await helpers.deleteEverythingInDb(db);
        membership = new Membership(db);
        registerResult = await membership.register({username: "a@a.com", password: "a", confirm: "a"});
        userId = registerResult.user._id;
        done();
      });

      afterAll(async function (done) {
        await helpers.closeDb(db);
        done();
      });

      it('return an id', async function (done) {
        const username = await membership.getUsernameById(userId);
        expect(username).toEqual("a@a.com");
        done();
      });

    });

  describe('Get username with user id - fail if user does not exist', function () {
    let db;
    let membership;
    let helpers;

    beforeAll(async function(done) {
      helpers = new Helpers();
      db = await helpers.connectToDb();
      await helpers.deleteEverythingInDb(db);
      membership = new Membership(db);
      done();
    });

    afterAll(async function (done) {
      await helpers.closeDb(db);
      done();
    });

    test('failure', async function (done) {
      try {
        await membership.getUsernameById("aaa");
      } catch (err) {
        expect(err).toEqual("cannot find the user");
        done();
      }

    });

  });

});
