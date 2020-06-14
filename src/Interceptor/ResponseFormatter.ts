import {Interceptor, InterceptorInterface, Action} from "routing-controllers";

@Interceptor()
export class ResponseFormatter implements InterceptorInterface {
    intercept(action: Action, content: any) {
        return {
            name: "Success",
            data: content,
            error: null
        }
    }
}
