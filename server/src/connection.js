const mongoose = require("mongoose");
const User = require("./User.model");

const connection = "mongodb://mongo:27017/docker-test";

const connectDb = () => {
    return mongoose.connect(connection);
};

module.exports = connectDb;