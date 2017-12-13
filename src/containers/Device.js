import {connect} from "react-redux";
import Device from "../components/Device";


const mapStateToProps = (state) => {
    return {
        device: state.device
    }
}


export default connect(
    mapStateToProps
)(Device)

