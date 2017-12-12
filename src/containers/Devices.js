import {connect} from "react-redux";
import Devices from "../components/Devices";


const mapStateToProps = (state) => {
    return {
        devices: state.devices
    }
}

export default connect(
    mapStateToProps
)(Devices)

