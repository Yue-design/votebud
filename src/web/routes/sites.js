let authCheck = require('../../lib/membership').authCheck;
let SiteLib = require("../../lib/Site");

module.exports = function (app, db, jwt_secret) {

  let siteLib = new SiteLib(db);

  app.post('/sites/', authCheck, async (req, res) => {

    try {
      const site = req.body;
      const savedSite = await siteLib.saveSite(site);
      res.json(savedSite);

    } catch (err) {
      return res.status(400).json({
        error: err
      });
    }
  });

  app.get('/sites/', async (req, res) => {

    try {

      const sites = await siteLib.getAllSites();
      res.json(sites);

    } catch (error) {
      return res.status(400).json({error});
    }
  });


};

