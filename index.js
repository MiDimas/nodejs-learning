// const http = require("http");
//
const port = process.env.PORT || 5000;
//
// const server = http.createServer((req, res) =>{
//     // res.writeHead(200, {
//     //     "Content-type": 'text/html; charset=utf-8'
//     // });
//     res.writeHead(200, {
//         'Content-type': 'application/json'
//     });
//     switch (req.url) {
//         case "/users":
//             return res.end(JSON.stringify({id: 1, name: 'petushok'}, null, 4 ));
//         case "/posts":
//             return res.end('POSTS');
//     }
//     res.end(req.url);
// });
//
// server.listen(port, () => console.log(`Сервер запущен на порту ${port}`));

const Application = require('./frame/Application');
const router = require('./src/user-router');
const jsonParser = require('./frame/parseJson');

const app = new Application();
app.use(jsonParser);
app.addRouter(router);
app.listen(port, () => console.log(`Сервер запущен на порту ${port}`));