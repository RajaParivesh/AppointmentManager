import "reflect-metadata"; // this shim is required
import {createExpressServer} from "routing-controllers";
import {UserController} from "./Controller/UserController";
const port = 3000;
// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
    controllers: [UserController] // we specify controllers we want to use
});

console.log(`Starting server on port ${port}`);
// run express application on port 3000
app.listen(port);
