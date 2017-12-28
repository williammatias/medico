import {connect} from "react-redux";
import Categories from "../scenes/Categories";


const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

export default connect(
    mapStateToProps
)(Categories)

