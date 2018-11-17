var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var server = express();
var port = 3636;
var host = 'localhost';


server.use("/", express.static('web'));
server.use(bodyParser.json());
server.use(cors());
var taskRouter = require('./routes/task');
server.use("/api", taskRouter);


server.listen(port, host, function(err) {
    if (!!err) {
        console.log('Error in starting the server');
        throw err;
    }
    console.log('server is running at '+host+':'+port);
        // database connection
        require("./db/database")
});

//server.post()



//console.log(typeof express);