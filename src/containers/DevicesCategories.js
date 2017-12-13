import {connect} from "react-redux";
import Main from "../components/DevicesCategories";
import {fetchDevices} from "../actions";


const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

const mapDispatchToProps = (dispatch) =>
    ({
        getDevices(category) {
            dispatch(
                fetchDevices(category)
            )
        }
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)

