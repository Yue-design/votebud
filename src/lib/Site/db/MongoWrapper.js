let assert = require("assert");

let MongoWrapper = function (db) {

  this.getAllSites = async function() {
    const sites = await db.collection('sites').find({}).toArray();
    return sites;
  };

  this.saveSite = async function(site) {
    await db.collection('sites').save(site);
    return site;
  };

  return this;
};

module.exports = MongoWrapper;
