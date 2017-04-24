import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import { getOrganizationInfo } from '../organization/OrganizationState';
import { getLocalities } from '../localities/LocalitiesState';
import { getUserProfile } from '../profile/ProfileState';

import Map from './MapView';

const enhance = compose(
  connect(
    null,
    {
      initOrganization: getOrganizationInfo,
      initLocalities: getLocalities,
      initUser: getUserProfile,
    },
  ),
  lifecycle({
    componentDidMount() {
      this.props.initOrganization();
      this.props.initLocalities();
      this.props.initUser();
    }
  })
);

export default enhance(Map);
