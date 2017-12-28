import {connect} from "react-redux";
import Device from "../scenes/Device";


const mapStateToProps = (state) => {
    return {
        device: state.device
    }
}


export default connect(
    mapStateToProps
)(Device)

