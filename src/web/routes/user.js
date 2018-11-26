let Membership = require("../../lib/membership").Membership;

module.exports = function (app, db) {

  let membership = new Membership(db);

  app.get('/user/username/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const username = await membership.getUsernameById(id);
      res.status(200).json({username: username});

    } catch (error) {
      return res.status(400).json({
        error: error
      });
    }
  });

};

