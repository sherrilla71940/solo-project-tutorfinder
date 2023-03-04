const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.getTutors);

router.get('/tutor/:email', controller.getTutor);

router.delete('/tutor/:id', controller.deleteTutor);

router.post('/tutor', controller.postTutor);

module.exports = router;