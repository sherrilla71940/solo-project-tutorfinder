import './App.css';
import { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';

import Tutors from './custom components/Tutors';
import {getTutors, getTutor} from './services';
import TutorProfile from './custom components/Tutor-Profile';

function App() {

  const [emailUrl, setEmailUrl] = useState('');
  const [tutors, setTutors] = useState([]);
  useEffect(() => {
    (async () => {
      await getTutors(setTutors);
    })()
  }, []);

  function addEmailQuery (tutor) {
    setEmailUrl(tutor.email);
  }

  useEffect(() => {
    if (emailUrl) console.log(emailUrl)
  }, [emailUrl]);

  return (
    <>
      <Routes>
        <Route path= '/' element= {<Tutors tutors={tutors} handler = {addEmailQuery}></Tutors>}/>
        <Route path= '/hello' element = {<h1>hello</h1>}/>
        <Route path= '*' element = {<h1>Content not found</h1>}/>
      </Routes>
    </>
  );
}

export default App;
