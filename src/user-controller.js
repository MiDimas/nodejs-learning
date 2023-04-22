// const userArr = [{id: 1, name: 'Dimas'},];
//
// const getUsers = (req, res) => {
//     if (req.params.id){
//         return res.send(userArr.find(user => user.id === Number(req.params.id)))
//     }
//     res.send(userArr);
// };
// const createUser = (req, res) => {
//     if (req.body){
//         userArr.push(req.body);
//     }
//     res.send({status: 'Ok'});
// };

//Тоже самое но при помощи базы данных
const User = require('./user-model');

const getUsers = async (req, res) => {
    let users;
    if(req.params.id){
        users = await User.findById(req.params.id);
    }
    else {
        users = await User.find();
    }
    res.send(users)
}
const createUser = async(req, res) => {
    let user;
    if (req.body) {
        user = await User.create(req.body);
    }
    if (user){
        res.send({status: 'Ok'});
    }
    else {
        res.send({status: 'Failed'})
    }
}
module.exports = {
    getUsers,
    createUser
}