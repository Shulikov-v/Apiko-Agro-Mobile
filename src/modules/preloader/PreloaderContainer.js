import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import Preloader from './PreloaderView';
import { fetchMapData } from './PreloaderState';

const enhance = compose(
  connect(
    null,
    {
      fetchMapData,
    }
  ),
  lifecycle({
    componentDidMount() {
      this.props.fetchMapData();
    }
  }),
);

export default enhance(Preloader);
