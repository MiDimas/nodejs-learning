const Router = require('../frame/Router');

const router = new Router();

router.get('/users', (req, res) => {
    res.writeHead(200, {
        'Content-type': 'application/json'
    });
    res.end(JSON.stringify({id: 1, name: 'Dimas'}, null, 4))
});
router.get('/posts', (req, res) => {
    res.writeHead(200, {
        'Content-type': 'application/json'
    });
    res.end(JSON.stringify({id: 1, title: 'Hello World', description: "more text"}, null, 4))
});

module.exports = router;