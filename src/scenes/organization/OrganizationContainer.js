import { compose } from 'recompose';
import { connect } from 'react-redux';

import OrganizationView from './OrganizationView';


const getLocalitiesNames = state => {
  const getLocalityNameById = id =>
    state.localities.find(loc => loc._id === id);

  return state.organization.localities
    .map(loc => loc.id)
    .map(id => getLocalityNameById(id))
    .map(locality => locality.name);
};

const mapStateToProps = state => {
  return {
    organization: {
      name: state.organization.name,
      localities: getLocalitiesNames(state),
    }
  };
};

const enhance = compose(
  connect(mapStateToProps),
);

export default enhance(OrganizationView);
