import { Events } from '../constants/Events';

const initialState = {
    token: null,
    email: null,
    firstName:null,
    lastName: null,
    error: false,
};

export default (state = initialState, action) => {
    const {payload, type} = action;
    switch (type) {
        case Events.LOGIN_SUCCESS:
            console.log("reducer", payload);
            return {
                ...state,
                ...payload,
                error: false
            };
        case Events.LOGIN_FAILED:
            console.log("reducer", payload);
            return {
                token: null,
                email: null,
                firstName:null,
                lastName: null,
                error: payload,
            };
        default:
            return state;
    }
};
