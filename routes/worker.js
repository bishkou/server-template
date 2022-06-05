const express = require('express');
const router = express.Router();

const WorkerService = require('../services/worker')


router.get('', WorkerService.getOne);

router.get('/:id', WorkerService.getAll);

router.post('', WorkerService.addOne);

router.patch('/:id', WorkerService.editOne);

router.delete('/delete/:id', WorkerService.deleteOne);

router.delete('/delete/all', WorkerService.deleteAll);





module.exports = router;
