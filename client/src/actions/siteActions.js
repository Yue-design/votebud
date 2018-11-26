import * as types from './actionTypes';
import MockSiteApi from '../api/mockSiteApi';
import SiteApi from '../api/SiteApi';

export function loadSitesSuccess(sites) {
  return { type: types.LOAD_SITES_SUCCESS, sites };
}

export function createSiteSuccess(site) {
  return { type: types.CREATE_SITE_SUCCESS, site };
}

export function updateSiteSuccess(site) {
  return { type: types.UPDATE_SITE_SUCCESS, site };
}

export function loadSites() {
  return async function (dispatch) {
    try {
      let sites = await SiteApi.getAllSites();
      dispatch(loadSitesSuccess(sites));
    } catch (err) {
      throw(err);
    }
  };
}

export function saveSite(site) {
  return async function (dispatch) {
    try {
      let savedSite = await SiteApi.saveSite(site);
      if (site._id) {
        dispatch(updateSiteSuccess(savedSite));
      } else {
        dispatch(createSiteSuccess(savedSite));
      }
    } catch (err) {
      throw(err);
    }
  };
}
