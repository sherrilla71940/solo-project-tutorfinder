const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.getTutors);

router.post('/tutor', controller.postTutor);

module.exports = router;