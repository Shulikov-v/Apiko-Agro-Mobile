import { compose, defaultProps, withState } from 'recompose';

import Map from './MapView';

const initialRegion = {
  latitude: 49.225012,
  longitude: 25.429044,
  latitudeDelta: 0.5,
  longitudeDelta: 0.5,
};

const enhance = compose(
  defaultProps({ initialRegion }),
  withState('modalData', 'setModalData', null),
  withState('isModalVisible', 'showModal', false),
);

export default enhance(Map);
