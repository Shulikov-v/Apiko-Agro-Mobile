import React from 'react';

import reducer from './AuthorizationState';

describe('Authorization', function() {
  const initialState = {
    authorized: false,
    loading: false,
    error: null,
  };

  describe('Reducer', function() {

    it('should return initial state on SIGN_OUT', function() {
      const actionMock = { type: 'SIGN_OUT' };

      expect(reducer(initialState, actionMock)).toEqual(initialState);
    })

  });

});
