const mongoose = require('mongoose');
const { Schema } = mongoose;
try {
  mongoose.connect('mongodb://127.0.0.1:27017/solo-project');
  console.log('connected to db');
} catch (e) {
  console.log('could not connect to db'. e.message);
}

const subjectSchema = new Schema({
  subject: {
    type: String,
    required: true
  },
  branches: [{
    name: String,
    hourlyRate: Number
  }]
});

const tutorSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  availability: {
    Monday: [String],
    Tuesday: [String],
    Wednesday: [String],
    Thursday: [String],
    Friday: [String]
  },
  subjects: {
    type: [subjectSchema],
    required: true
  },
  teachingLocations: {
    type: [String],
    required: true
  },
  email: {
    type: String,
  },
  introduction: {
    type: String,
    required: true
  },
  profilePictureUrl: {
    type: String,
  }
});

const tutorModel = mongoose.model('Tutor', tutorSchema);

module.exports = {tutorModel};

