import { compose } from 'recompose';
import { connect } from 'react-redux';

import Map from './MapView';

const enhance = compose(
  connect(
    null,
    {},
  ),
);

export default enhance(Map);
