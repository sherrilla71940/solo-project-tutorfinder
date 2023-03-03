const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.getTutors);

module.exports = router;