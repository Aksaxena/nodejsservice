/****************************************************************************************
 *** Author: Alok saxena
 *** Description : This is config file to choose enviroment of application
 *** Request : 
 *** Response : 
 *** Date : 3 Dec 2022
 ***************************************************************************************/

const path = require('path')
const extend = require('util')._extend
const development = require('./env/development')
const defaults = {
  root: path.normalize(__dirname + '/..')
}

/**
 * Expose
 */

module.exports = {
  development: extend(development, defaults),
}[process.env.NODE_ENV || 'development']
