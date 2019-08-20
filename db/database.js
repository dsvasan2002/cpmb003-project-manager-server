var mongoose =  require('mongoose');

mongoose.connect('mongodb://localhost:27017/ProjectManagerDB_7', { useNewUrlParser: true }, function(err){  // For local run
// mongoose.connect('mongodb://mongo:27017/ProjectManagerDB_9', { useNewUrlParser: true }, function(err){   // For Docker run
        if(!!err){
        console.log("Error in connecting to database");
        console.error(err);
    } else {
        console.log("Connection established successfully..");
    }
});

