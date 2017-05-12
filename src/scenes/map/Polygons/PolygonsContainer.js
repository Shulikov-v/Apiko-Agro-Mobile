import R from 'ramda';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { compose, lifecycle, withHandlers } from 'recompose';

import { getPolygons } from '../../polygons/PolygonsState';

import PolygonsView from './PolygonsView';

const localitiesSelector = createSelector([ state => state.localities ],
  localities => localities.map(loc => R.pick(['_id', 'name'], loc)));

const polygonsSelector = createSelector([
    state => state.polygons,
    state => state.mapFilter.activeLocality,
  ],
  (polygons, activeLocality) => {
    return polygons.filter(polygon => polygon.localityId === activeLocality);
  });

const mapStateToProps = state => ({
  activeLocality: state.mapFilter.activeLocality,
  localities: localitiesSelector(state),
  polygons: polygonsSelector(state),
});

const mapDispatchToProps = {
  initPolygons: getPolygons,
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    getPolygonInfoById: ({ polygons, localities }) => id => {
      if(R.isEmpty(polygons) || R.isEmpty(localities)) return;
      const polygon = polygons.find(polygon => polygon._id === id);
      const locality = localities.find(loc => loc._id === polygon.localityId);

      return {
        ...R.pick(['cadastralNumber', 'square'], polygon),
        localityName: locality.name
      };
    },
  }),
  lifecycle({
    componentWillReceiveProps({ activeLocality }) {

      if(activeLocality && activeLocality !== this.props.activeLocality) {
        this.props.initPolygons(activeLocality);
      }
    }
  })
);

export default enhance(PolygonsView);
