import {connect} from "react-redux";
import CustomNavBar from '../components/CustomNavBar';

const mapStateToProps = (state) => {
    return {
        device: state.device
    }
}


export default connect(mapStateToProps)(CustomNavBar)

