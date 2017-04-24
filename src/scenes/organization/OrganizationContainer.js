import { compose } from 'recompose';
import { connect } from 'react-redux';

import OrganizationView from './OrganizationView';

const enhance = compose(
  connect(
    null,
    {},
  ),
);

export default enhance(OrganizationView);
