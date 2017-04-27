import { compose } from 'recompose';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Fields from './Fields';

const getFieldsForTable = createSelector([
  state => state.fields,
  state => state.localities,
],
  (fields, localities) => {
    const getLocalityNameById = id =>
      localities.find(loc => loc._id === id).name;

  return fields
    .map(field => ({
      _id: field._id,
      name: field.name,
      square: field.square,
      localityName: getLocalityNameById(field.localityId),
    }))[0]
  });

const mapStateToProps = state => {
  return {
    fields: getFieldsForTable(state)
  };
};

const enhance = compose(
  connect(mapStateToProps),
);

export default enhance(Fields);
