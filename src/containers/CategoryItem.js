import {connect} from "react-redux";
import {fetchDevices} from "../actions";
import CategoryItem from "../components/CategoryItem";

const mapDispatchToProps = (dispatch) =>
    ({
        getDevices(category, limit) {
            dispatch(
                fetchDevices(category, limit)
            )
        }
    })

export default connect(0, mapDispatchToProps)(CategoryItem)

