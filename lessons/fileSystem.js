const fs = require('fs');
const path = require('path');

//Асинхронная реализация записи файла через промис

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => {
        return fs.writeFile(path, data, (err)=>{
            if (err){
                return reject(err.message);
            }
            resolve("good");
        })
    })
}
// Тоже самое но на дозапись
const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => {
        return fs.appendFile(path, data, (err)=>{
            if (err){
                return reject(err.message);
            }
            resolve("good");
        })
    })
}
// Тоже самое но на чтение
const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => {
        return fs.readFile(path, {encoding: 'utf-8'}, (err, data)=>{
            if (err){
                return reject(err.message);
            }
            resolve(data);
        })
    })
}
const filepath = path.resolve(__dirname, "text.txt");
writeFileAsync(filepath, "Просто текст")
    .then(() => appendFileAsync(filepath, "\nдополнительный текст"))
    .then(() => appendFileAsync(filepath, "\nдополнительный текст"))
    .then(() => readFileAsync(filepath))
    .then((data) => appendFileAsync(filepath, `\n${data}`))

    .catch(() => console.log('failure'))