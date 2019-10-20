const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://adminuser:Pwd12345@cluster0-pgd2v.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });

client.connect(err => {
    if(err) {
        console.log("ERROR db: " + err);
    }
    //client.close();
});
module.exports = client;