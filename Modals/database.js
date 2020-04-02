const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const file = new FileSync('./Modals/db.json')
const db = low(file)
 
// Set some defaults
/*  db.defaults({ Students: []})
  .write()  */


module.exports=db