/****************************************************************************************
 *** Author: Alok saxena
 *** Description : List of api endponts 
 *** Request : GET request
 *** Response : json data
 *** Date : 3 Dec 2022
 ***************************************************************************************/
import ApiController from "../app/modules/api";
import {stringConstants} from "../app/common/constants";
import * as ValidationManger from "../middleware/validation";
module.exports = (app) => {
    app.get('/', (req, res) => res.send(stringConstants.SERVICE_STATUS_HTML));

    /**
     * route definition
     */
    app.get("/movieList",  new ApiController().movies);
    app.get("/fetchAllUsers",  new ApiController().fetchAllUsers);
    app.post("/createUser", ValidationManger.validateCreateUser, new ApiController().createUser);
    app.put("/updateUser",  ValidationManger.validateUpdateUser,new ApiController().updateUser);
    app.delete("/removeUser",  ValidationManger.validateRemoveUser,new ApiController().removeUser);
};
