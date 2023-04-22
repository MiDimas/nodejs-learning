const mongoose = require('../node_modules/mongoose/index');


const userSchema = new mongoose.Schema({
    name: String,
    password: String,
});

module.exports = mongoose.model("User", userSchema);