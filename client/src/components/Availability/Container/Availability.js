import { connect } from 'react-redux';
import Availability from "../Presentation/Availability";
import {request} from "../../../utils/requests";
import AppConstant from "../../../constants/AppConstant";

const mapStateToProps = (state) => {
    return ({
        user: state.user,
    });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    addAvailability: (payload, token) => {
        console.log(ownProps.user);
        console.log(payload);
        const body = {
            url: `${AppConstant.BASE_URL}/slots`,
            method: "POST",
            data: payload,
            headers: {
                "authorization": token,
            }
        }
        console.debug('Trying to add availability with payload: ', body);
        return request(body);
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Availability);
