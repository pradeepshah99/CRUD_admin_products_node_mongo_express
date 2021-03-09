require('./database/db');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const port = process.env.PORT || 5500;
const host = process.env.host;

// using the middleware here for this application

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use('/images', express.static('uploadData'));

let adminRoutes = require('./routes/routingData');
app.use('/api/admin/', adminRoutes);



const server = app.listen(port, () => console.log(`server running at port ${port}`));




