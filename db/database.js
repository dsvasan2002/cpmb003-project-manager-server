var mongoose =  require('mongoose');

mongoose.connect('mongodb://localhost:27017/project_manager', { useNewUrlParser: true }, function(err){
    if(!!err){
        console.log("Error in connecting to database ");
        console.error(err);
    } else {
        console.log("Connection established successfully..");
    }
});

