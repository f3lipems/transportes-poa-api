const port = 80

const os = require('os');
const bodyParser = require('body-parser')
const express = require('express')
const cluster = require('cluster');
const compression = require('compression');
const server = express()

function application() {
    
    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(bodyParser.json())

    server.use(compression());

    server.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    server.listen(port, function() {
        console.log(`API is running on port ${port}`);
    })
}

if(cluster.isMaster)
	for(var i=0, n=os.cpus().length; i<n; i+=1)
		cluster.fork();
else
	application();

module.exports = server