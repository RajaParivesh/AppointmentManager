import {Action} from "routing-controllers";
import {Authorization} from "../Utils/Authorization";

export class AuthenticationMiddleware {
    public static authorize(action: Action): boolean {
        if (!action.request.headers.authorization) return false;
        action.request.auth = Authorization.verify(action.request.headers.authorization);
        return true;
    }
}