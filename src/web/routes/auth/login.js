let Membership = require('../../../lib/membership').Membership;


let Login = function (app, db, jwt_secret) {

  let membership = new Membership(db, jwt_secret);

  app.post('/auth/login/', async (req, res) => {
    try {

      const result = await membership.authenticate(req.body);

      // console.log();
      if (result.success == false) {
        // console.log('throw');
        throw result.message;
      }

      res.status(200).json(result);

    } catch (err) {
      // console.log('in catch in login');
      return res.status(401).json({error: err});
    }
  });


};

module.exports = Login;
