import {connect} from 'react-redux';
import Home from '../components/Home';
import {sample} from '../actions/sample';

const mapStateToProps = ({home}) => ({home});
const mapDispatchToProps = (dispatch) => ({
  sampleAction: (someData) => dispatch(sample(someData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);