import { compose } from 'recompose';
import { connect } from 'react-redux';

import ProfileView from './ProfileView';

const mapStateToProps = (state) => {
  const { profile } = state.profile;
  return {
    email: profile.email,
    fullName: `${profile.firstName} ${profile.lastName}`,
  };
};

const enhance = compose(
  connect(
    mapStateToProps,
  ),
);

export default enhance(ProfileView);
