import { compose } from 'recompose';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import OrganizationView from './OrganizationView';

const getLocalitiesNames = createSelector([
  state => state.organization,
  state => state.localities,
],
  (organization, localities) => {
    const getLocalityNameById = id =>
      localities.find(loc => loc._id === id);

    return organization.localities
      .map(loc => loc.id)
      .map(id => getLocalityNameById(id))
      .map(locality => locality.name);
  });

const mapStateToProps = state => ({
  organization: {
    name: state.organization.name,
    localities: getLocalitiesNames(state),
  },
});

const enhance = compose(
  connect(mapStateToProps),
);

export default enhance(OrganizationView);
