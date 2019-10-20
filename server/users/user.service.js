const fs = require('fs');
const client = require('_helpers/db');

// users hardcoded for simplicity, store in a db for production applications
//const users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];

module.exports = {
    authenticate,
    addUser,
    getAll
};

async function authenticate({ username, password }) {
    let user = {};
    const collection = client.db("climb_record_db").collection("userinfo");
    await collection.findOne({username: username})
        .then((item) => {
            if(item) {
                user[username] = item.username;
                user[password] = item.password;
                user['firstName'] = item.firstName;
                user['lastName'] = item.lastName;
            }
         })
        .catch((err) => console.log("ERROR authenticate: " + err));
        
    if (Object.keys(user).length > 0)  {
        let { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    } 
    
}

async function addUser({ firstName, lastName, username, password }) {

    let user = {};
    const collection = client.db("climb_record_db").collection("userinfo");
    await collection.findOne({username: username})
        .then(function(value) {
            if (!value) { // if user if not found, we add user to database
                collection.insertOne({
                    username: username,
                    password: password,
                    firstName: firstName,
                    lastName: lastName
                });
                user = JSON.parse(JSON.stringify({username: username, password: password, firstName: firstName, lastName: lastName}));
            } else {
                //user = JSON.parse(JSON.stringify(value));
                throw 'username taken';
            }
        })
        .catch((err) => console.log("ERROR addUser: " + err));
        
        if (Object.keys(user).length > 0)  {
            let { password, ...userWithoutPassword } = user;
            return userWithoutPassword;
        } 

}

async function getAll() {
    return client.db("climb_record_db").collection("userinfo").find().toArray();
}
