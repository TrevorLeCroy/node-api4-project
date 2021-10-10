const users = [{
    userName: 'username',
    password: 'password'
}];

const find = () => {
    return new Promise((resolve, reject) => {
        resolve(users);
    })
}

const insert = (user) => {
    return new Promise((resolve, reject) => {
        users.push(user);
        resolve(user);
    });
}

const login = (loginUser) => {
    return new Promise((resolve, reject) => {
        users.forEach(user => {
            if(user.userName === loginUser.userName &&
               user.password === loginUser.password) {
                resolve();
            } else {
                reject();
            }
        });
    });
}

module.exports = {
    find,
    insert,
    login
};