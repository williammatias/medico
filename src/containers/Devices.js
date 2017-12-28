import {connect} from "react-redux";
import Devices from "../scenes/Devices";
import {fetchDevice} from "../actions";


const mapStateToProps = (state) => {
    return {
        devices: state.devices
    }
}

const mapDispatchToProps = (dispatch) =>
    ({
        getDevice(product_code) {
            dispatch(
                fetchDevice(product_code)
            )
        }
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Devices)

