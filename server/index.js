const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const helmet = require('helmet');

const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://keiran:<Macduffer#1>@vcp-test-server-6xbdc.mongodb.net/test?retryWrites=true";
const uri = "mongodb://kkoz:a123456@ds151402.mlab.com:51402/vcp-test";
// MongoClient.connect(uri, function(err, db) {
//     if(err) {
//         console.log('unable to connect to mongoDB. Error: ', err);
//     } else {
//         console.log('Connection established to MongoDB at ', uri);
//     }

//     db.close();
// });
 
const server = express();
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => {
        // START SERVER
        const port = process.env.PORT || 6666;
        server.listen(port, () => console.log(`API running on port ${port}`));

    }).catch((err) => {
        console.log(err);
    });

// MIDDLEWARE
server.use(morgan('dev'));
server.use(bodyParser.json());
server.use(cors(corsOptions));
// server.use(express.json());
// server.use(helmet());

// ROUTES
server.use('/users', require('./constants/routes'));

// sanity check
server.get('/', (request, response) => {
    response.send('Server initialized.');
});
