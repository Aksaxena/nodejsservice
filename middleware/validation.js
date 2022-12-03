/****************************************************************************************
 *** Author: Alok saxena
 *** Description : This is middleware for every request
 *** Request : GET request
 *** Response : validation on request
 *** Date : 3 Dec 2022
 ***************************************************************************************/

 import Utils from '../app/utils'
 import * as yup from 'yup'
 
 module.exports = {
   validateCreateUser: async (req, res, next) => {
     const schema = yup.object().shape({
        fname: yup.string().required(),
        lname: yup.string().required(),
        email: yup.string(8, 'Must be at least 8 characters').email('Email is required'),
        contact_number: yup.string().min(10,'Must be at least 10 digit').required()
     })
     await validate(schema, req.body, res, next)
   },
   validateUpdateUser: async (req, res, next) => {
    const schema = yup.object().shape({
       user_id: yup.number().required(),
       fname: yup.string().required(),
       lname: yup.string().required(),
       email: yup.string(8, 'Must be at least 8 characters').email('Email is required'),
       contact_number: yup.string().min(10,'Must be at least 10 digit').required()
    })
    await validate(schema, req.body, res, next)
  },
  validateRemoveUser: async (req, res, next) => {
    const schema = yup.object().shape({
       user_id: yup.number().required()
    })
    await validate(schema, req.body, res, next)
  }
 }
 
 const validate = async (schema, reqData, res, next) => {
   try {
     await schema.validate(reqData, { abortEarly: false })
     next()
   } catch (e) {
     const errors = e.inner.map(({ path, message, value }) => ({ path, message, value }))
     Utils.responseForValidation(res, errors)
   }
 }