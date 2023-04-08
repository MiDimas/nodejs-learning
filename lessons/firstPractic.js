const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
dotenv.config();
const text = process.env.TEXT || '';


const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err){
            return reject(err.message);
        }
        resolve();
    }));
};
const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding:"utf-8"}, (err, data) => {
        if (err){
            return reject(err.message);
        }
        resolve(data);
    }));
};
const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if (err){
            return reject(err.message);
        }
        resolve("Файл удален");
    }));
};

const fileFstPath = path.resolve(__dirname, "fst.txt");
const fileCountPath = path.resolve(__dirname, "count.txt");

writeFileAsync(fileFstPath, text)
    .then(()=>readFileAsync(fileFstPath))
    .then(data => writeFileAsync(fileCountPath, data.split(" ").length.toString()))
    .then(()=> removeFileAsync(fileFstPath))
    .catch((err)=> console.log(err));

console.log(text);