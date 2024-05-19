const mongoose = require("mongoose");

const connection = mongoose
  .createConnection(
    "mongodb+srv://isaac:major@cluster0.8eppx.mongodb.net/todo_flutter?retryWrites=true&w=majority"
  )
  .on("open", () => {
    console.log("DB connection successful!");
  })
  .on("error", () => {
    console.log("Error connecting to DB");
  });

module.exports = connection;
