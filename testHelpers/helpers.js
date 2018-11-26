let bodyParer = require('body-parser');
import assert from 'assert';
let MongoClient = require('mongodb').MongoClient;
import MongodbMemoryServer from 'mongodb-memory-server';
// let MongoClient = require('mongo-mock').MongoClient;
// jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
let ObjectID = require('mongodb').ObjectID;

class Helpers {

  async connectToDb() {

    let mongoServer = new MongodbMemoryServer();
    const mongoUri = await mongoServer.getConnectionString();
    let db = await MongoClient.connect(mongoUri);
    // let db = await MongoClient.connect("mongodb://localhost:27017/best-buddhists-sites-test");
    db.inMemoryServer = mongoServer;
    return db;

  }

  async deleteEverythingInDb(db) {
    assert(db, 'db is required');
    await db.collection('users').remove({});
    await db.collection('sites').remove({});
  }

  async closeDb(db) {
    await this.deleteEverythingInDb(db);
    await db.close();
    await db.inMemoryServer.stop();
  }

  getExpressApp() {
    let app = require('express')();
    app.use(bodyParer.json({limit: '5000mb'}));
    app.use((req, res, next) => {
      req.JWT_SECRET = "abc";
      next();
    });

    return app;
  }

  async insertDummyUser1(db) {
    await db.collection("users").insertOne({
      "_id" : new ObjectID("56955ca46063c5600627f393"),
      "username" : "steve1",
      "signInCount" : 0,
      "hashedPassword" : "$2a$10$GzUpHO2NvEewGD2KRxvzfOtcsIF92pBTM3vEWCTz4V.91qPJgSC16",
      "status" : "approved"
    });
  }

}

module.exports = Helpers;
