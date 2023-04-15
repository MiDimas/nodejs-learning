const Router = require('../frame/Router');

const router = new Router();

router.get('/users', (req, res) => {
    res.send(JSON.stringify({id: 1, name: 'Dimas'}, null, 4))
});
router.get('/posts', (req, res) => {
    res.send(JSON.stringify({id: 1, title: 'Hello World', description: "more text"}, null, 4))
});
router.get('/user', (req, res) => {
    res.writeHead(200, {
        'Content-type': 'application/javascript;charset=utf-8'
    });
    res.end(`console.log("Petux")`)
});
module.exports = router;