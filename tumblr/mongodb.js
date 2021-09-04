// crud
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "tumblr";

const SAVEDATA = function (blog) {
  MongoClient.connect(
    connectionURL,
    { useNewUrlParser: true },
    (error, client) => {
      if (error) {
        return console.log("unable to connect database!");
      }
      // console.log("connected corectly");

      const db = client.db(databaseName);
      db.collection(blog.name).insertOne({
        title: blog.title,
        description: blog.description,
        name: blog.name,
        Posts: blog.Posts,
      });
    }
  );
};
module.exports = {
  SAVEDATA: SAVEDATA,
};
