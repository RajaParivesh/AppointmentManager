import {SlotController} from "./Controller/SlotController";

import "reflect-metadata"; // this shim is required
import {createExpressServer} from "routing-controllers";
import {UserController} from "./Controller/UserController";
import {createConnection, useContainer} from "typeorm";
import {Container} from "typedi";
import {User} from "./Entity/User";
import {Slots} from "./Entity/Slots";
const port = 3000;

useContainer(Container);
createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "raja",
    password: "raja",
    database: "event_manager",
    entities: [User,Slots],
    synchronize: true,
    logging: false,
    insecureAuth: true
}).then(async () => {

    console.log("Connected. Now run express app");
    createExpressServer({
        controllers: [UserController,SlotController]
    }).listen(port);
    console.log(`Server is up and running on port ${port}. Now send requests to check if everything works.`);

}).catch(error => console.log("Error: ", error));
