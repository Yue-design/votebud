import delay from './delay';

const sites = [
  {
    _id: "1",
    name: "Middle Way Society",
    href: "https://middle-way.org",
    lang: "english",
    votes: 22
  },
  {
    _id: "2",
    name: "Buddhanet",
    href: "https://buddhanet.org",
    lang: "english",
    votes: 20
  },
  {
    _id: "3",
    name: "中道学会",
    href: "https://www.middle-way.org/home-ch",
    lang: "chinese",
    votes: 30
  }
];

// cannot use async here because setTimeout is not a async function
class SiteApi {
  static getAllSites() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], sites));
      }, delay);
    });
  }

  static saveSite(site) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        if (site.id) {
          const existingSiteIndex = sites.findIndex(a => a.id == site.id);
          sites.splice(existingSiteIndex, 1, site);
        } else {
          site.id = Date.now();
          sites.push(site);
        }

        resolve(site);
      }, delay);
    });
  }

}

export default SiteApi;
