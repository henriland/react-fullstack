const mongoose = require('mongoose')
mongoose.Promise = global.Promise

// local database url
const uri = 'mongodb://localhost:27017/portal-db' 

mongoose.connect(uri).then(
    () => { 
        console.log('Connected to Mongo');        
    },
    err => {
         console.log('error connecting to Mongo: ')
         console.log(err);         
        }
  );

module.exports = mongoose.connection