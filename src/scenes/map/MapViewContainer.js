import R from 'ramda';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { compose, lifecycle, defaultProps, withHandlers, withState } from 'recompose';

import { getOrganizationInfo } from '../organization/OrganizationState';
import { getDepartments } from '../departments/DepartmentsState';
import { getLocalities } from '../localities/LocalitiesState';
import { getUserProfile } from '../profile/ProfileState';
import { getFields } from '../fields/FieldsState';
import { getPolygons } from '../polygons/PolygonsState';

import Map from './MapView';

const initialRegion = {
  latitude: 49.225012,
  longitude: 25.429044,
  latitudeDelta: 0.5,
  longitudeDelta: 0.5
};

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
  fields: state.fields,
  organization: state.organization,
  mapFilter: state.mapFilter,
  // needed for `getFieldInfoById` handler
  localities: localitiesSelector(state),
  polygons: polygonsSelector(state),
});

const mapDispatchToProps = {
  initOrganization: getOrganizationInfo,
  initDepartments: getDepartments,
  initLocalities: getLocalities,
  initUser: getUserProfile,
  initFields: getFields,
  initPolygons: getPolygons,
};

const enhance = compose(
  connect( mapStateToProps, mapDispatchToProps ),
  defaultProps({ initialRegion }),
  withState('isModalVisible', 'showModal', false),
  withState('isPolygonModalVisible', 'showPolygonModal', false),
  withState('activeField', 'setActiveField', { name: '', square: 0, localityName: 0 }),
  withState('activePolygon',
    'setActivePolygon',
    {
      cadastralNumber: '',
      square: '',
      localityName: ''
    }),
  withHandlers({
    getFieldInfoById: ({ fields, localities }) => id => {
      if(R.isEmpty(fields) || R.isEmpty(localities)) return;

      const field = fields.find(field => field._id === id);
      const locality = localities.find(loc => loc._id === field.localityId);

      return {
        ...R.pick(['name', 'square'], field),
        localityName: locality.name
      };
    },
    getPolygonInfoById: ({ polygons, localities }) => id => {
      if(R.isEmpty(polygons) || R.isEmpty(localities)) return;
      const polygon = polygons.find(polygon => polygon._id === id);
      const locality = localities.find(loc => loc._id === polygon.localityId);

      return {
        ...R.pick(['cadastralNumber', 'square'], polygon),
        localityName: locality.name
      };
    },
    getColorForField: ({ organization }) => (localityId, type) => {
      if(R.isEmpty(organization)) return;

      const opacityValue = (type) => {
        if (type === 'fill') return '32'; // 0.2 opacity
        if(type === 'stroke') return '80'; // 0.5 opacity
        return '';
      };

      const color = organization.localities.find(loc => loc.id === localityId).color;
      return color + opacityValue(type);
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.initOrganization();
      this.props.initDepartments();
      this.props.initLocalities();
      this.props.initFields();
      this.props.initUser();
    },
    componentWillReceiveProps({ mapFilter }) {
      const { activeLocality } = mapFilter;

      if(activeLocality && activeLocality !== this.props.mapFilter.activeLocality) {
        this.props.initPolygons(mapFilter.activeLocality);
      }
    }
  })
);

export default enhance(Map);
