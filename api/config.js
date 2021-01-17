const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

const config = {
  ENDPOINT: '/api',
  getDB: ()=> {
    db.defaults({ products: []}).write();
    db.defaults({users: []}).write();
    return db;
  }
};

module.exports = config;