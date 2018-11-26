import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';


import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

import * as siteActions from './siteActions';
import * as types from './actionTypes';

describe('', function () {
  test('', () => {

  });
});

// describe('Site Actions', function () {

    // test('can create UPVOTE_SITE action', () => {
    //
    //   const siteId = 1;
    //   const expectedAction = {
    //     type: types.UPVOTE_SITE_SUCCESS,
    //     siteId
    //   };
    //
    //   const action = siteActions.upvoteSiteSuccess(siteId);
    //   expect(action).toEqual(expectedAction);
    //
    //
    // });


// });

// describe('Async Actions', function () {
  // afterEach(() => {
  //   nock.cleanAll();
  // });
  //
  // test('should UPVOTE_SITE', () => {
  //
  //   const store = mockStore({sites: [
  //     {
  //       id: 1,
  //       votes: 0
  //     }
  //   ]});
  //   store.dispatch(siteActions.upvoteSite(1)).then(() => {
  //
  //   });
  //
  // });
// });
