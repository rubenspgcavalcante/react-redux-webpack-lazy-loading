import {connect} from 'react-redux';
import Projects from '../components/Projects';

const mapStateToProps = ({home}) => ({home});

export default connect(mapStateToProps)(Projects);