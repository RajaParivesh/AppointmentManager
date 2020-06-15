import { connect } from 'react-redux';
import Register from "../Presentation/Register";
import {request} from "../../../utils/requests";
import AppConstant from "../../../constants/AppConstant";

const mapStateToProps = () => {};

const mapDispatchToProps = () => ({
    register: (payload) => {
        console.log("sending payload", payload);
        const body = {
            url: `${AppConstant.BASE_URL}/users`,
            method: "POST",
            data: payload,
        }
        console.debug('Trying to register with payload: ', body);
        return request(body);
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);
