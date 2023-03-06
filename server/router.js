const router = require('express').Router();
const controller = require('./controller');

router.get('/tutors', controller.getTutors);

router.get('/tutor', controller.getTutorByEmail);

router.delete('/tutor/:id', controller.deleteTutor);

router.post('/tutor', controller.postTutor);

module.exports = router;