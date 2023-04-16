const userArr = [{id: 1, name: 'Dimas'},];

const getUsers = (req, res) => {
    if (req.params.id){
        return res.send(userArr.find(user => user.id === Number(req.params.id)))
    }
    res.send(userArr);
};
const createUser = (req, res) => {
    if (req.body){
        userArr.push(req.body);
    }
    res.send({status: 'Ok'});
};

module.exports = {
    getUsers,
    createUser
}