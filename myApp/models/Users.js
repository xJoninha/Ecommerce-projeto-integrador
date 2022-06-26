const fs = require('fs');
const path = require('path');
const helper = {};

const usersMethods = {

    helperRead: helper.read = fileName => fs.readFileSync(path.join(__dirname, `../data/${fileName}`), 'utf-8'),

    helperWrite: helper.write = (fileName, data) =>
    fs.writeFileSync(
        path.join(__dirname, `../data/${fileName}`),
        JSON.stringify(data, null, 2),
        "utf-8"
    ),

    getUsers: function() { return JSON.parse(this.helperRead('users.json'))},

    setUsers: function(users) { return this.helperWrite('users.json', users)}
}
 

module.exports = usersMethods;