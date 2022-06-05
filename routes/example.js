const express = require('express');
const router = express.Router();

const ExampleService = require('../services/example')



router.get('', ExampleService.getOneExample)


module.exports = router;
