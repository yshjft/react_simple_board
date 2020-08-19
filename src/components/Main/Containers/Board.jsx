import Board from "../Board/Board";
import {connect} from "react-redux";

function mapReduxStateToReactProps(state){
    return{
        list : state.list
    }
}

export default connect(mapReduxStateToReactProps)(Board);