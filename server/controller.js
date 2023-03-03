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
    res.send('successfully deleted tutor by id:', tutorId);
  } catch (e) {
    res.status(400);
    res.send('could not delete tutor by id:', tutorId);
    console.log(e);
  }
}

async function getTutor (req, res) {
  const tutorId = req.params.id;
  console.log(tutorId)
  try {
    const foundTutor = await tutorModel.findById({_id: tutorId});
    res.status(200);
    res.send(foundTutor);
    // res.send('nothing');
  } catch (e) {
    console.log(e.message);
    res.status(400);
    res.send('Could not find tutor by id:', tutorId);
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

module.exports = {getTutors, postTutor, getTutor, deleteTutor};