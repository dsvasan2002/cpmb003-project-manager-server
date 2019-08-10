//Test Comment
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var server = express();
var port = 3636;
// var host = 'localhost';
var host = '0.0.0.0';

var taskRouter = require('./routes/task.router');
var projectRouter = require('./routes/project.router');
var userRouter = require('./routes/user.router');
var parentRouter = require('./routes/parent.router');

server.use("/", express.static('web'));
server.use(bodyParser.json());
server.use(cors());
server.use('/api/tasks', taskRouter);
server.use('/api/projects', projectRouter);
server.use('/api/users', userRouter);
server.use('/api/parenttasks', parentRouter);

server.listen(port, host, function(err) {
    if (!!err) {
        console.log('Error in starting the server');
        throw err;
    } else {
        console.log('server is running at '+host+':'+port);
        // database connection
        require("./db/database")
    }
});

