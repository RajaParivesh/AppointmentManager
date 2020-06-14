import {Middleware, ExpressErrorMiddlewareInterface} from "routing-controllers";
import {Response} from "express";

@Middleware({ type: "after" })
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {

    error(error: any, request: any, response: Response, next: (err: any) => any) {
        console.log("error", JSON.stringify(error));
        error.error = true;
        delete error.stack;
        error['data'] = null;
        error.debug = error.errors;
        delete error.errors;
        // @ts-ignore
        next(error);
    }
}
