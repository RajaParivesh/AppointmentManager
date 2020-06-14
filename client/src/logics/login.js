import {createLogic} from 'redux-logic';
import {Events} from '../constants/Events';
import {request} from "../utils/requests";
import AppConstant from "../constants/AppConstant";

const initiateLoginLogic = createLogic({
    type: Events.LOGIN_INITIATED,
    debounce:100,

    process: ({ getState, action }, dispatch, done) => {
        const body = {
            url: `${AppConstant.BASE_URL}/users/login`,
            method: "POST",
            data: action.payload,
        }

        console.debug('Fetching data for widget with body: ', body);

        request(body)
            .then((response) => {
                console.debug('Login data success: ', response);
                dispatch({
                    type: Events.LOGIN_SUCCESS,
                    payload: response.data
                });
            })
            .catch((err) => {
                console.debug('Login data failure: ', err);
                dispatch({
                    type: Events.LOGIN_FAILED,
                    payload: "Something went wrong!",
                });
            })
            .finally(() => done());
        }

});

export default [initiateLoginLogic];
