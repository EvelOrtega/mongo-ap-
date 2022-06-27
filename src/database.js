const mongoose = require("mongoose");
const connecectionString = "mongodb+srv://adm:123@meraki-back.7stfb.mongodb.net/?retryWrites=true&w=majority"
const server = "127.0.0.1:27017";
const database = "meraki";

class Database {
  constructor() {
    this._connect(connecectionString);
  }

  _connect() {
    mongoose
      .connect(connecectionString)
      .then(() => {
        console.log("Database connection successful");
      })
      .catch((err) => {
        console.error("Database connection error");
      });
  }
}

module.exports = new Database();
