import { connect } from 'react-redux';
import { Permissions } from 'expo';
import { compose, lifecycle } from 'recompose';


import Preloader from './PreloaderView';
import { fetchMapData } from './PreloaderState';

const enhance = compose(
  connect(
    null,
    {
      fetchMapData,
    },
  ),
  lifecycle({
    async componentDidMount() {
      this.props.fetchMapData();

      const initialAsk = await Permissions.getAsync(Permissions.LOCATION);
      if (initialAsk.status !== 'granted') {
        Permissions.askAsync(Permissions.LOCATION);
      }
    },
  }),
);

export default enhance(Preloader);
