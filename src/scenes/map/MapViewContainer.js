import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
import { NavigationActions } from 'react-navigation';
import Map from './MapView';

const enhance = compose(
  connect(
    null,
    dispatch => {
      return {
        navigate: bindActionCreators(NavigationActions.navigate, dispatch)
      };
    }
  ),
);

export default enhance(Map);
