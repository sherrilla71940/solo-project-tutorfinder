import {useParams} from 'react-router-dom';
// import { getTutor } from '../services';
import {useNavigation} from 'react-router-dom'


export default function TutorProfile () {
  const tutorEmail = useParams();
  const navigation = useNavigation();
  const tutor = navigation.state;
  // console.log(tutorEmail);
  console.log(tutor);

  return (
    <>
    {/* <img src={tutor.profilePictureUrl} alt ='profile pic'></img>
    <h2>Tutor Name: {tutor.fullName}</h2>
    <h2>age: {tutor.age}</h2>
    <h2>email: {tutor.email} </h2>
    <h2>{tutor.profilePictureUrl}</h2> */}
    </>
  );
}