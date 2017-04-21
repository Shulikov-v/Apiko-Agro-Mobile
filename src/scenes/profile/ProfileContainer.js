import { connect } from 'react-redux';
import { compose } from 'recompose';
import ProfileView from './ProfileView';

const enhance = compose(
  connect(),
);

export default enhance(ProfileView);
