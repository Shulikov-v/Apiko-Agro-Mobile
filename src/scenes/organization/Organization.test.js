import React from 'react';
import renderer from 'react-test-renderer';

import reducer, { getOrganizationInfo } from './OrganizationState';
import OrganizationView from './OrganizationView';

describe('Organization', function() {
  const organizationMock = {
    _id: '123',
    name: 'Organization',
    localities: ['loc1', 'loc2']
  };

  describe('Thunks', function() {

    describe('getOrganizatonInfo', function() {

      it('should return a function', function() {
        expect(getOrganizationInfo()).toBeInstanceOf(Function);
      })

    })

  });

  describe('Reducer', function() {

    it('should return initialized organization', function() {
      const actionMock = { type: 'INIT_ORGANIZATION', organization: organizationMock };

      expect(reducer(null, actionMock)).toBe(organizationMock);
    })

  });

  describe('View', function() {

    it('renders correctly', function() {

      const tree = renderer.create(
        <OrganizationView organization={organizationMock}/>
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

  });

});
