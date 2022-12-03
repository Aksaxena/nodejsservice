/****************************************************************************************
 *** Author: Alok saxena
 *** Description : This is entry point of application and created a vertual server here
 *** Request : 
 *** Response : 
 *** Date : 9 Oct 2022
 ***************************************************************************************/
import APP from "express";
import Utils from "./app/utils";
import Config from "./config";
import routes from "./routes";
import {httpConstants} from "./app/common/constants";

const app = new APP();
require("./config/express")(app);
process.on('unhandledRejection', error => {
    // Will print "unhandledRejection err is not defined"
    console.log('unhandledRejection', error.message);
});

class Server {
    static listen() {
        Promise.all([true])
            .then(async () => {
                let server = app.listen(Config.PORT);
                console.log("listen", `Server Started on port ${Config.PORT}`, {}, "Developer", httpConstants.LOG_LEVEL_TYPE.INFO);
                routes(app);
            })
            .catch((error) => {
                console.log("listen", "failed to connect", {err: error}, "Developer", httpConstants.LOG_LEVEL_TYPE.ERROR)
            });
    }
}

Server.listen();
