// const dotenv = require('dotenv');
// dotenv.config();
// console.log(process.pid);
// console.log(process.env.PORT);
// console.log(process.env.NODE_ENV);
const path = require('path');
// console.log(path.join(__dirname, '..'));
// Узнать расширение файла
// console.log(path.extname('pitux.js'));
const siteUrl = 'https://localhost:8080/user?id=5153';
const url = new URL(siteUrl);
console.log(url);