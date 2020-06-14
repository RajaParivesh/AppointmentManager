import { connect } from 'react-redux';
import {Events} from "../../../constants/Events";
import Register from "../Presentation/Register";
import request from "../../../utils/requests";

const mapStateToProps = () => {};

const mapDispatchToProps = dispatch => ({
    register: (payload) => {
        console.log("sending payload", payload)
        dispatch({
            type: Events.LOGIN_INITIATED,
            payload: payload
        });
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);
