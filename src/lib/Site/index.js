let MongoWrapper = require('./db/MongoWrapper');
let Site = require("./models/Site");

let SiteLib = function (db) {

  let mongoWrapper = new MongoWrapper(db);

  this.getAllSites = async function() {
    const sites = await mongoWrapper.getAllSites();
    return sites.map((site) => {
      return new Site(site);
    });
  };

  this.saveSite = async (site) => {
    let siteModel = new Site(site);
    return await mongoWrapper.saveSite(siteModel);
  };

};

module.exports = SiteLib;
