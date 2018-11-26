let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
require('jasmine-co').install();
let sinon = require('sinon');

const MongoWrapper = require("./MongoWrapper");
let Helpers = require('../../../../testHelpers/helpers');

describe('Site MongoWrapper', function () {

  describe('get all sites if there are records in the db', function () {
    let mongoWrapper;
    let helpers;
    let db;

    beforeAll(async (done) => {
      helpers = new Helpers();
      db = await helpers.connectToDb();

      // insert dummy data
      await db.collection('sites').insertMany([
        {
          _id: 1,
          name: "Middle Way Society",
          href: "https://middle-way.org",
          lang: "english",
          votes: 22
        },
        {
          _id: 2,
          name: "Buddhanet",
          href: "https://buddhanet.org",
          lang: "english",
          votes: 20
        },
        {
          _id: 3,
          name: "中道学会",
          href: "https://www.middle-way.org/home-ch",
          lang: "chinese",
          votes: 30
        }
      ]);
      mongoWrapper = new MongoWrapper(db);

      done();
    });

    test('', async function (done) {
      let allSites = await mongoWrapper.getAllSites();
      expect(allSites.length).toEqual(3);
      done();
    });


  });


  describe('return [] when getting all sites if there are no records in the db', function () {
    let mongoWrapper;
    let helpers;
    let db;

    beforeAll(async (done) => {
      helpers = new Helpers();
      db = await helpers.connectToDb();
      mongoWrapper = new MongoWrapper(db);

      done();
    });

    test('', async function (done) {
      let allSites = await mongoWrapper.getAllSites();
      expect(allSites).toEqual([]);
      done();
    });


  });


  describe('save new site', function () {
    let mongoWrapper;
    let helpers;
    let db;
    let result;

    beforeAll(async (done) => {
      helpers = new Helpers();
      db = await helpers.connectToDb();
      mongoWrapper = new MongoWrapper(db);
      const site = {
        name: "Middle Way Society",
        href: "https://middle-way.org",
        lang: "english",
        votes: 22
      };
      result = await mongoWrapper.saveSite(site);
      // console.log(result);

      done();
    });

    test('site will have an auto-generated id', async function (done) {
      let site = await db.collection('sites').findOne({href: "https://middle-way.org"});
      expect(site._id).toBeDefined();
      done();
    });

    test('result have id', () => {
      expect(result).toBeDefined();
    });

  });





});
