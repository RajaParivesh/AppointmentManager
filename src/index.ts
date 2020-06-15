import {SlotController} from "./Controller/SlotController";

import * as dotenv from 'dotenv'

import "reflect-metadata"; // this shim is required
import {Action, useExpressServer} from "routing-controllers";
import {UserController} from "./Controller/UserController";
import {createConnection, useContainer} from "typeorm";
import {Container} from "typedi";
import {User} from "./Entity/User";
import {Slots} from "./Entity/Slots";
import {SlotStatus} from "./Entity/SlotStatus";
import {AuthenticationMiddleware} from "./Middleware/AuthenticationMiddleware";
import * as express from 'express';
import * as cors from 'cors';
import {LoggingMiddleware} from "./Middleware/Logging";
import * as bodyParser from "body-parser";
import {ResponseFormatter} from "./Interceptor/ResponseFormatter";
import {CustomErrorHandler} from "./Entity/ErrorMiddleWare";

const port = 3000;
dotenv.config();
const {DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE, APP_PORT} = process.env;
useContainer(Container);

// @ts-ignore
createConnection({
    type: "mysql",
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    entities: [User,Slots,SlotStatus],
    synchronize: true,
    logging: false,
    insecureAuth: true
}).then(async () => {
    const app = express();
    app.use(cors());
    app.use(bodyParser());

    console.log("Connected. Now run express app");
    useExpressServer(app,{
        routePrefix: "/api",
        authorizationChecker: (action: Action) => AuthenticationMiddleware.authorize(action),
        middlewares:[LoggingMiddleware, CustomErrorHandler],
        interceptors:[ResponseFormatter],
        controllers: [UserController,SlotController],
        // defaultErrorHandler: false
    });
    app.use(['/login', '/dashboard', '/register', '/availability', '/appointments', '/book', '/'], express.static('client/build'));
    app.listen(APP_PORT)
    console.log(`Server is up and running on port ${APP_PORT}. Now send requests to check if everything works.`);

}).catch(error => console.log("Error: ", error));
