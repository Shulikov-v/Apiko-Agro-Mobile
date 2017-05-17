import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import AppView from './AppView';
import store from './redux/store';
import * as snapshotUtil from './utils/snapshot';
import * as SessionStateActions from './modules/session/SessionState';

const enhance = compose(
  connect(
    state => ({
      isReady: state.session.isReady,
    }),
  ),
  lifecycle({
    componentDidMount() {
      snapshotUtil.resetSnapshot()
        .then((snapshot) => {
          const { dispatch } = this.props;

          if (snapshot) {
            dispatch(SessionStateActions.resetSessionStateFromSnapshot(snapshot));
          } else {
            dispatch(SessionStateActions.initializeSessionState());
          }

          store.subscribe(() => {
            snapshotUtil.saveSnapshot(store.getState());
          });
        });
    },
  }),
);

export default enhance(AppView);
