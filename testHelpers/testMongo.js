let MongoClient = require('mongodb').MongoClient;
let ObjectID = require('mongodb').ObjectID;

let connect = async function() {
  let db = await MongoClient.connect("mongodb://localhost:27017/best-buddhists-sites-test");
  await db.collection("users").insertOne({
    "_id" : new ObjectID("56955ca46063c5600627f393"),
    "username" : "steve1",
    "signInCount" : 0,
    "hashedPassword" : "$2a$10$GzUpHO2NvEewGD2KRxvzfOtcsIF92pBTM3vEWCTz4V.91qPJgSC16",
    "status" : "approved"
  });
  console.log('hello');
};

connect();
return;
