import {Middleware, ExpressMiddlewareInterface} from "routing-controllers";

@Middleware({ type: "before" })
export class LoggingMiddleware implements ExpressMiddlewareInterface {

    use(request: any, response: any, next: (err: any) => any): void {
        console.log({
            headers: JSON.stringify(request.headers),
            body: JSON.stringify(request.body)
        });
        // @ts-ignore
        next();
    }
}
