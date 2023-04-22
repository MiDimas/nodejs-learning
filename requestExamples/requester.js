//Скрипт для отправки post запроса на наш сервер
const http = require('http');

const data = JSON.stringify({
    name: 'Midi',
    password: 'fdf3gdf',
})
const options = {
    hostname: 'localhost',
    port: 5000,
    path: '/users',
    method: 'POST',
    headers: {
        "content-type": "application/json",
        "content-length": data.length
    }
};

const req = http.request(options, res => {
    console.log(res.statusCode);
    let info = '';
    res.on("data", (chunk) => {
        info += chunk;
        // console.log(chunk);
    })
    res.on("end", () =>{
        console.log(JSON.parse(info))
    })
})
req.on("error", (err)=>{
    console.log(err.message)
})
req.write(data)
req.end();