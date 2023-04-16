const Router = require('../frame/Router');

const router = new Router();
//Временное хранение в массиве
const userArr = [{id: 1, name: 'Dimas'},]

router.get('/users', (req, res) => {
    res.send(userArr);
});
router.post('/users', (req, res) => {
    console.log(req.body);
    if (req.body){
        userArr.push(req.body);
    }
    res.send(userArr);
});
router.get('/posts', (req, res) => {
    res.send({id: 1, title: 'Hello World', description: "more text"});
});
router.get('/user', (req, res) => {
    res.writeHead(200, {
        'Content-type': 'application/javascript;charset=utf-8'
    });
    res.end(`console.log("Petux")`);
});
module.exports = router;