/****************************************************************************************
 *** Author: Alok saxena
 *** Description : This endpoints business logic here
 *** Request : GET,POST,PUT,DELETE request
 *** Response : Logs in json format
 *** Date : 3 Dec 2022
 ***************************************************************************************/
 import User from "../../models/User";
export default class Manger {
    movieList = async (requestData) => {
        let responseArr = [
            {name:"Waar",rating : 2.5,released_date:"5 Jan 2023"},
            {name:"DDLG",rating : 4,released_date:"5 Jan 2023"},
            {name:"Sholey",rating : 3.5,released_date:"5 Jan 2023"},
            {name:"Saajan",rating : 4.5,released_date:"5 July 2023"},
            {name:"Fighter",rating : 8,released_date:"5 June 2023"},
            {name:"Border",rating : 9,released_date:"5 Feb 2023"},
            {name:"KNPH",rating : 9.5,released_date:"5 April 2023"},
            {name:"Dosti",rating : 8.5,released_date:"5 Oct 2023"},
            {name:"Dubaara",rating : 3,released_date:"5 Sep 2025"},
            {name:"Holi",rating : 6,released_date:"15 Aug 2025"},
            {name:"Avtaar",rating : 5.5,released_date:"17 Jan 2024"},
            {name:"Avtaar 2",rating : 10,released_date:"6 Jan 2024"},
            {name:"Drishyam 2",rating : 9.5,released_date:"21 Jan 2023"},
            {name:"Drishyam",rating : 9,released_date:"15 Jan 2025"},
            {name:"khiladi",rating : 7,released_date:"5 Jan 2024"},
            {name:"Hero",rating : 6,released_date:"16 March 2024"},
            {name:"Heropanti",rating : 5.5,released_date:"11 Feb 2023"},
            {name:"Mausham",rating : 3.5,released_date:"5 Jan 2023"},
            {name:"Player",rating : 4.5,released_date:"25 Jan 2023"},
            {name:"Matrix",rating : 5,released_date:"15 Jan 2023"},

        ]
        let finalArr = []
        for(let i=0;i<=20; i++){
            finalArr.push(responseArr[Math.floor(this.random(1, 15))-1])
        }
        return finalArr;
        
    }

    async fetchAllUsers() {
        let userlist = await User.getUserList({});
        if (!userlist) return 0;
        return userlist;
    }

    async createUser(requestData) {
        var userObj = {
            'fname': requestData.fname,
            'lname': requestData.lname,
            'email': requestData.email,
            'contact_number': requestData.contact_number,
          }
          let result = await User.saveData(userObj)
          if (!result) return 0;
        return result;
      
    }

    async updateUser(requestData) {
        var userObj = {
            'user_id': requestData.user_id,
            'fname': requestData.fname,
            'lname': requestData.lname,
            'email': requestData.email,
            'contact_number': requestData.contact_number,
          }
          let user =  await User.getUser({user_id:requestData.user_id})
         let result =  await User.updateUser(user,userObj)
        if (!result) return 0;
        return result;
    }

    async removeUser(requestData) {
        var userObj = {
            'user_id': requestData.user_id,
          }
        let result = await User.deleteUser(userObj);
        if (!result) return 0;
        return result;
    }

    random = (mn, mx) =>{
        return Math.random() * (mx - mn) + mn;
    }
    
}
