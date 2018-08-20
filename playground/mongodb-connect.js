const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if(err) {
        return console.log("Unable to connect to MongoDB server. ", err);
    };

    console.log('Connected to MongoDB server.');

    // db.collection('Todos').find({completed: false}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2))
    // },(err) => {
    //     console.log('Unable to fetch dotos', err);
    // });

    db.collection('Todos').find().count().then((count)=>{
        console.log('Todos');
        console.log("Total Totos: ", count);
    },(err) => {
        console.log('Unable to fetch dotos', err);
    });

    //db.close();
});