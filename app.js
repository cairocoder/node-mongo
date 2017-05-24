/**
 * Created by NileGeek on 5/23/17.
 */
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if (err) {
       return console.log('Erro connecting to the db.');
   }
   console.log('Successfully connected to the db.');

   // db.collection('Todos').insertOne({
   //     text: 'one task',
   //     completed: false
   // }, (err, result) => {
   //     if (err) {
   //         return console.log('Unable to insert todo', err);
   //     }
   //     console.log(JSON.stringify((result.ops), undefined, 2));
   // });

   // db.collection('Users').insertOne({
   //     name: 'Said',
   //     age: 29,
   //     location: 'Egypt'
   // }, (err, result) => {
   //     if (err) {
   //         return console.log('Unable to insert user', err);
   //     }
   //     console.log(JSON.stringify((result.ops), undefined, 2));
   // });

    db.collection('Todos').find({completed: false}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
       console.log('Error fetching data.', err);
    });

   // db.close();
});