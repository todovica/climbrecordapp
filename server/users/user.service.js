const fs = require('fs');

// users hardcoded for simplicity, store in a db for production applications
//const users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];

module.exports = {
    authenticate,
    addUser,
    getAll
};

async function authenticate({ username, password }) {
    let users = fs.readFileSync('C:/tmp/test').toString().split("\n");  
    const user = users.find(function(el) {
        let u = JSON.parse(el);
        return u.username === username && u.password === password;
      });
    if (user) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
}

async function addUser({ firstName, lastName, username, password }) {

    let users = fs.readFileSync('C:/tmp/test').toString().split("\n");
    let user = users.find(function(el) {
        let u = JSON.parse(el);
        return u.username === username && u.password === password;
      }); 
    
    const line = `\n{ "id": ${(users.length) ? users.length+1 : 0}, "username": "${username}", "password": "${password}", "firstName": "${firstName}", "lastName": "${lastName}" }`;  
    if (!user) {
        fs.appendFileSync('C:/tmp/test', line);
        user = JSON.parse(line);
    }
    if (user) {
        let { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
}

async function getAll() {
    let users = fs.readFileSync('C:/tmp/test').toString().split("\n");
    return users.map(u => {
        let el = JSON.parse(u);
        const { password, ...userWithoutPassword } = el;
        return userWithoutPassword;
    });
}
