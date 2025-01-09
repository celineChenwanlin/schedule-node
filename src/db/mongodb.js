const mongoose = require("mongoose");

const url =
  "mongodb://localhost:27017/local?retryWrites=false&loadBalanced=false&serverSelectionTimeoutMS=5000&connectTimeoutMS=10000";

mongoose.connect(url, {
  useNewUrlParser: true,
});
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.once("open", (x) => {
  console.log("Successfully");
});

db.on("error", function (error) {
  console.error("Error in MongoDb connection: " + error);
  mongoose.disconnect();
});

db.on("close", function () {
  console.log("disconnect");
  mongoose.connect(url, { server: { auto_reconnect: true } });
});

module.exports = db;
