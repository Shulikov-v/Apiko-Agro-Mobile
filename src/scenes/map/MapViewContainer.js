import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import { getOrganizationInfo } from '../organization/OrganizationState';
import { getLocalities } from '../localities/LocalitiesState';

import Map from './MapView';

const enhance = compose(
  connect(
    null,
    {
      initOrganization: getOrganizationInfo,
      initLocalities: getLocalities,
    },
  ),
  lifecycle({
    componentDidMount() {
      this.props.initOrganization();
      this.props.initLocalities();
    }
  })
);

export default enhance(Map);
