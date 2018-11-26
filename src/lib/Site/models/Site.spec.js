let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
require('jasmine-co').install();
let sinon = require('sinon');

import Site from './Site';

describe('Site', function () {
  describe('init', function () {

    let site;
    beforeAll(() => {

      site = new Site({
        _id: 2,
        name: "Buddhanet",
        href: "https://buddhanet.org",
        lang: "english",
      });

    });

    test('should have votes default', function () {
      expect(site.votes).toEqual(0);
    });

  });



});
