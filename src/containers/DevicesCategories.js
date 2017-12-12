import {connect} from "react-redux";
import Main from "../components/DevicesCategories";


const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

export default connect(
    mapStateToProps
)(Main)

