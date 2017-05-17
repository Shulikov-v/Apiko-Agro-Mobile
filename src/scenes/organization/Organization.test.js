import React from 'react';
import renderer from 'react-test-renderer';

import reducer, { getOrganizationInfo } from './OrganizationState';
import OrganizationView from './OrganizationView';

describe('Organization', () => {
  const organizationMock = {
    _id: '123',
    name: 'Organization',
    localities: ['loc1', 'loc2'],
  };

  describe('Thunks', () => {
    describe('getOrganizatonInfo', () => {
      it('should return a function', () => {
        expect(getOrganizationInfo()).toBeInstanceOf(Function);
      });
    });
  });

  describe('Reducer', () => {
    it('should return initialized organization', () => {
      const actionMock = { type: 'INIT_ORGANIZATION', organization: organizationMock };

      expect(reducer(null, actionMock)).toBe(organizationMock);
    });
  });

  describe('View', () => {
    it('renders correctly', () => {
      const tree = renderer.create(
        <OrganizationView organization={organizationMock} />,
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
