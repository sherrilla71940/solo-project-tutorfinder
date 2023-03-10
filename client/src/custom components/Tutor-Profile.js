import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import { getTutor } from '../services';


export default function TutorProfile () {

  const {email} = useParams();
  const [tutor, setTutor] = useState({});

  useEffect(() => {
    (async function fetchTutor () {
      await getTutor(email, setTutor);
    })()
  }, []);

  console.log(tutor);

  return (
   <>
     {
    <div>
      <img src={tutor.profilePictureUrl} alt ='profile pic'></img>
      <h2>Tutor Name: {tutor.fullName}</h2>
      <h2>age: {tutor.age}</h2>
      <h2>email: {tutor.email} </h2>
      <h2>teaching locations: </h2>
      <p>{
          tutor.teachingLocations?.map((location, index) => {
          console.log(location);
          return (
            <>
            <span key = {index}>{location + (index == tutor.teachingLocations.length-1 ? '.' : ', ')} </span>
            </>
          );
        })
        }
        </p>
    </div>
    }
   </>
  );
}