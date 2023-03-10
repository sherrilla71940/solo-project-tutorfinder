import './App.css';
import { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';

import Tutors from './custom components/Tutors';
import {getTutors} from './services';
import TutorProfile from './custom components/Tutor-Profile';

function App() {

  const [emailUrl, setEmailUrl] = useState('');
  const [tutors, setTutors] = useState([]);
  useEffect(() => {
    (async () => {
      await getTutors(setTutors);
    })()
  }, []);

  useEffect(() => {
    if (emailUrl) console.log(emailUrl)
  }, [emailUrl]);

  return (
    <>
      <Routes>
        <Route path= '/tutors' element= {<Tutors tutors={tutors}></Tutors>}/>
        <Route path= '/hello' element = {<h1>hello</h1>}/>
        <Route path= '/tutors/:email' element= {<TutorProfile/>}/>
        <Route path= '*' element = {<h1>Content not found</h1>}/>
      </Routes>
    </>
  );
}

export default App;
