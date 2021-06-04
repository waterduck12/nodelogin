"use strict";

class UserStorage {

    static #users = {
        id : ["hyeon", "min", "koo"],
        psword : ["1234", "1234", "123456"],
        name : ["구현민", "구여민", "해배"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

}

module.exports = UserStorage;