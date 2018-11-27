const express = require('express');
const helmet = require('helmet');

const cors = require('cors');
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors(corsOptions));

const port = 6666;
server.listen(port, () => console.log(`API running on port ${port}`));

// sanity check
server.get('/', (request, response) => {
    response.send('Server initialized.');
});