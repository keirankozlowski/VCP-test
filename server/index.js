const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const helmet = require('helmet');

// const cors = require('cors');
// const corsOptions = {
//     origin: '*',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

// const MongoClient = require('mongodb').MongoClient;
// var uri = "mongodb+srv://keiran:<Macduffer#1>@vcp-test-server-6xbdc.mongodb.net/test?retryWrites=true";
// MongoClient.connect(uri, function(err, db) {

//     db.close();
// });

const server = express();

// MIDDLEWARE
server.use(morgan('dev'));
server.use(bodyParser.json());
// server.use(express.json());
// server.use(helmet());
// server.use(cors(corsOptions));

// ROUTES
server.use('/users', require('./constants/routes'));

// START SERVER
const port = process.env.PORT || 6666;
server.listen(port, () => console.log(`API running on port ${port}`));

// sanity check
server.get('/', (request, response) => {
    response.send('Server initialized.');
});


