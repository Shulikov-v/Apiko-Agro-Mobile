import { compose } from 'recompose';
import { connect } from 'react-redux';

import ProfileView from './ProfileView';

const enhance = compose(
  connect(),
);

export default enhance(ProfileView);
