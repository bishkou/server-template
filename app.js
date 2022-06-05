const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const morgan = require('morgan');
const helmet = require('helmet')

const exampleRoutes = require('./routes/example')


const app = express();

app.use(morgan('common'));
app.use(helmet());
app.use(cors());

app
    .use(bodyParser.urlencoded({extended: true}))
    .use(bodyParser.json())
    .use('/api/example', exampleRoutes)





module.exports = app;
