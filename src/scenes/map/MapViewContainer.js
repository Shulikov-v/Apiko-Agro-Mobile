import { compose, lifecycle, defaultProps, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import R from 'ramda';

import { getOrganizationInfo } from '../organization/OrganizationState';
import { getLocalities } from '../localities/LocalitiesState';
import { getUserProfile } from '../profile/ProfileState';
import { getFields } from '../fields/FieldsState';

import Map from './MapView';

const initialRegion = {
  latitude: 49.225012,
  longitude: 25.429044,
  latitudeDelta: 0.5,
  longitudeDelta: 0.5
};

const mapStateToProps = createSelector([
  state => state.fields,
  state => state.localities,
  state => state.organization,
],
  (fields, localities, organization) => {
  return {
    fields,
    localities: localities.map(loc => R.pick(['_id', 'name'], loc)),
    organization,
  };
});

const enhance = compose(
  connect(
    mapStateToProps,
    {
      initOrganization: getOrganizationInfo,
      initLocalities: getLocalities,
      initUser: getUserProfile,
      initFields: getFields,
    },
  ),
  defaultProps({
    initialRegion
  }),
  withState('isModalVisible', 'showModal', false),
  withState('activeField', 'setActiveField', { name: '', square: 0, localityName: 0 }),
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
      this.props.initLocalities();
      this.props.initUser();
      this.props.initFields();
    }
  })
);

export default enhance(Map);
