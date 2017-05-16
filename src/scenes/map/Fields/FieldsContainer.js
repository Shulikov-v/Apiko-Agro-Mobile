import R from 'ramda';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { compose, withHandlers } from 'recompose';

import FieldsView from './FieldsView';

import colors from '../../../styles/colors';

const localitiesSelector = createSelector([ state => state.localities ],
  localities => localities.map(loc => R.pick(['_id', 'name'], loc)));

const mapStateToProps = state => ({
  fields: state.fields,
  mapFilter: state.mapFilter,
  organization: state.organization,
  localities: localitiesSelector(state),
});

const enhance = compose(
  connect(mapStateToProps),
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
      const { half, aLittle } = colors.opacity;

      if(R.isEmpty(organization)) return;

      const opacityValue = type => {
        if(type === 'stroke') return half;
        if (type === 'fill') return aLittle;
        return '';
      };

      const color = organization.localities.find(loc => loc.id === localityId).color;
      return color + opacityValue(type);
    },
  }),
);

export default enhance(FieldsView);
