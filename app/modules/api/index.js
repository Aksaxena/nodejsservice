/****************************************************************************************
 *** Author: Alok saxena
 *** Description : This endpoints are controller for providing data flux log and area incidents data
 *** Request : GET request
 *** Response : Logs in json format
 *** Date : 9 Oct 2022
 ***************************************************************************************/
import Utils from '../../utils'
import { apiSuccessMessage, httpConstants } from '../../common/constants'
import BLManager from './manger'

export default class Index {
  /****************************************************************************************
 *** Author: Alok saxena
 *** Description : This endpoints are providing data flux movie list in json
 *** Request : GET request
 *** Response : movie list in json
 *** Date : 3 Dec 2022
 ***************************************************************************************/
  async movies (request, response) {
    const [error, data] = await Utils.parseResponse(new BLManager().movieList())
    if (!data) { return Utils.handleError(error, request, response) }
    return Utils.response(response, data, apiSuccessMessage.FETCH_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK)
  }
  /****************************************************************************************
 *** Author: Alok saxena
 *** Description : This endpoints are providing data flux user list in json
 *** Request : GET request
 *** Response : user list in json
 *** Date : 3 Dec 2022
 ***************************************************************************************/
 async fetchAllUsers (request, response) {
  const [error, data] = await Utils.parseResponse(new BLManager().fetchAllUsers(request.body))
  if (!data) { return Utils.handleError(error, request, response) }
  return Utils.response(response, data, apiSuccessMessage.FETCH_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK)
}
  /****************************************************************************************
 *** Author: Alok saxena
 *** Description : This endpoint is using to create new user
 *** Request : POST request
 *** Response : user details in json with status code 200
 *** Date : 3 Dec 2022
 ***************************************************************************************/
 async createUser (request, response) {
  const [error, data] = await Utils.parseResponse(new BLManager().createUser(request.body))
  if (!data) { return Utils.handleError(error, request, response) }
  return Utils.response(response, data, apiSuccessMessage.FETCH_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK)
}
 /****************************************************************************************
 *** Author: Alok saxena
 *** Description : This endpoint is using to update user data
 *** Request : PUT request
 *** Response : updateUser confirmation message with status code 200
 *** Date : 3 Dec 2022
 ***************************************************************************************/
 async updateUser (request, response) {
  const [error, data] = await Utils.parseResponse(new BLManager().updateUser(request.body))
  if (!data) { return Utils.handleError(error, request, response) }
  return Utils.response(response, data, apiSuccessMessage.FETCH_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK)
}
/****************************************************************************************
 *** Author: Alok saxena
 *** Description : This endpoint is using to remove user
 *** Request : GET request
 *** Response : removeUser confirmation message with status code 200
 *** Date : 3 Dec 2022
 ***************************************************************************************/
 async removeUser (request, response) {
  const [error, data] = await Utils.parseResponse(new BLManager().removeUser(request.body))
  if (!data) { return Utils.handleError(error, request, response) }
  return Utils.response(response, data, apiSuccessMessage.FETCH_SUCCESS, httpConstants.RESPONSE_STATUS.SUCCESS, httpConstants.RESPONSE_CODES.OK)
}
}
