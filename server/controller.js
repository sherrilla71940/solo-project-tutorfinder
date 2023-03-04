const {tutorModel} = require('./db');

async function getTutors (req, res) {
  try {
    const allTutors = await tutorModel.find();
    res.status(200);
    res.send(allTutors);
  } catch (e) {
    res.status(404);
    res.send('could not get all tutors');
    console.log(e.message);
  }
}

async function deleteTutor (req, res) {
  const tutorId = req.params.id;
  try {
    await tutorModel.deleteOne({ _id: tutorId });
      res.status(200);
      res.send('deleted');
  } catch (e) {
    res.status(404);
    res.send('could not delete');
  }
}

async function getTutorByEmail (req, res) {
  const tutorEmail = req.query.email;
  try {
    const foundTutor = await tutorModel.findOne({email: tutorEmail});
    res.status(200);
    res.send(foundTutor);
    // res.send('nothing');
  } catch (e) {
    console.log(e.message);
    res.status(400);
    res.send('Could not find tutor by email:', tutorEmail);
  }
}

async function postTutor (req, res) {
  const tutor = req.body;
  try {
    await tutorModel.create({
      fullName: tutor.fullName,
      age: tutor.age,
      gender: tutor.gender,
      availability: tutor.availability,
      subjects: tutor.subjects,
      teachingLocations: tutor.teachingLocations,
      email: tutor.email,
      introduction: tutor.introduction,
      profile_picture: tutor.profile_picture
  });
  res.status(201);
  res.send('successfully posted new tutor');

  } catch (e) {
    res.status(400);
    res.send('could not post tutor');
    console.log(e.message);
  }
}

module.exports = {getTutors, postTutor, getTutorByEmail, deleteTutor};