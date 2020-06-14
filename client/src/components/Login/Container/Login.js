import { connect } from 'react-redux';
import {Events} from "../../../constants/Events";
import Login from "../Presentational/Login";

const mapStateToProps = (state) => {
    return ({
        user: state.user,
    });
};

const mapDispatchToProps = dispatch => ({
    initiateLogin: (payload) => {
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
)(Login);
