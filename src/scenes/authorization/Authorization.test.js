import reducer from './AuthorizationState';

describe('Authorization', () => {
  const initialState = {
    authorized: false,
    loading: false,
    error: null,
  };

  describe('Reducer', () => {
    it('should return initial state on SIGN_OUT', () => {
      const actionMock = { type: 'SIGN_OUT' };

      expect(reducer(initialState, actionMock)).toEqual(initialState);
    });
  });
});
