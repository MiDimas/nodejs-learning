const Router = require('../frame/Router');
const controller = require('./user-controller');
const router = new Router();
//Временное хранение в массиве


router.get('/users', controller.getUsers);

router.post('/users', controller.createUser);

// router.get('/posts', (req, res) => {
//     res.send({id: 1, title: 'Hello World', description: "more text"});
// });
// router.get('/user', (req, res) => {
//     res.writeHead(200, {
//         'Content-type': 'application/javascript;charset=utf-8'
//     });
//     res.end(`console.log("Petux")`);
// });
module.exports = router;