import {combineReducers} from "redux";
import user from "./users";
const configSettings = combineReducers({
    user: user
} );

export default configSettings;
