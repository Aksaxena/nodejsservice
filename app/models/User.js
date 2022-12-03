/****************************************************************************************
 *** Author: Alok saxena
 *** Description : Thsi is user schema
 *** Request : 
 *** Response : 
 *** Date : 3 Dec 2022
 ***************************************************************************************/
let mongoose = require("mongoose");
let Schema = mongoose.Schema;
const UserSchema = new Schema({
  fname: { type: String, default: "" },
  lname: { type: String, default: "" },
  email: { type: String, default: "" },
  contact_number: { type: Number, default: 0 },
  createdOn: { type: Number, default: Date.now() },
  modifiedOn: { type: Number, default: Date.now() },
  isDeleted: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
});

UserSchema.method({
  saveData: async function () {
    return await this.save();
  },
});
UserSchema.static({
  getUser: function (findQuery) {
    return this.findOne(findQuery);
  },
  updateUser: function (findObj, updateObj) {
    return this.findOneAndUpdate(findObj, updateObj, {
      returnNewDocument: true,
    });
  },
  updateManyUsers: function (findObj, updateObj) {
    return this.updateMany(findObj, updateObj);
  },
  getUserList: function (
    findObj,
    selectionKey = "",
    skip = 0,
    limit = 0,
    sort = 1
  ) {
    return this.find(findObj, selectionKey).skip(skip).limit(limit).sort(sort);
  },
  bulkUpsert: function (bulkOps) {
    return this.bulkWrite(bulkOps);
  },
  deleteUser: function (Query) {
    return this.findOneAndDelete(Query);
  },
});
module.exports = mongoose.model("user", UserSchema);
