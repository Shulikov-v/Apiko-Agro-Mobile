import { compose } from 'recompose';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import R from 'ramda';

import {
  toggleFilterModal,
  toggleLocalitiesFilter,
  setActiveLocality
} from './MapViewState';

import FiltersModal from '../../components/FiltersModal';

const departmentsSelector = createSelector([
  state => state.departments,
  state => state.localities,
],
  (departments, localities) => departments.map(dep => {
    dep.localities = dep.localitiesIds
      .map(locId => localities.find(loc => loc._id === locId))
      .map(loc => R.pick(['_id', 'name'], loc));

    return R.pick(['_id', 'name', 'localities'], dep);
  })
);

const mapStateToProps = state => ({
  departments: departmentsSelector(state),
});

const mapDispatchToProps = {
  toggleModal: toggleFilterModal,
  toggleLocalitiesFilter,
  setActiveLocality,
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
);

export default enhance(FiltersModal);
