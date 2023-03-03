const {tutorModel} = require('./db');

async function getTutors (req, res) {
  const allTutors = await tutorModel.find();
  console.log(allTutors)
  res.send(allTutors);

}

async function postTutor (req, res) {
  const tutor = req.body;
  try {
    const newTutor = await tutorModel.create({
      fullName: tutor.fullName,
      age: tutor.age,
      gender: tutor.gender,
      availability: tutor.availability,
      subjects: tutor.subjects,
      locations: tutor.locations,
      email: tutor.email,
      introduction: tutor.introduction,
      profile_picture: tutor.profile_picture
  });

  res.send('saved tutor');

  } catch (e) {
    console.log(e.message);
    res.send('could not send tutor back');
  }
}

module.exports = {getTutors, postTutor};