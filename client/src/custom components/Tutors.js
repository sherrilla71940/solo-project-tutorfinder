import TutorIcon from './Tutor-icon';
// import TutorProfile from './Tutor-Profile';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
// import {useState} from 'react';
// import { getTutor } from '../services';

export default function Tutors (props) {
  // const [tutor, setTutor] = useState({});

  const navigate = useNavigate();
  return (
    <>
      <ul>
        <li>
          <Link to= '/hello'>Hello Page</Link>
        </li>
        {props.tutors.map(tutor => {
        return (
          <li key = {tutor._id} className='tutor' tutor = {tutor} onClick={() => {
          // setTutor(tutor);
          // getTutor(tutor.email, setTutor);
          navigate(`/${tutor.email}`, {state: {tutor: tutor}});
          }
          }>
            <TutorIcon profilePictureUrl = {tutor.profilePictureUrl}/>
            {/* <Link to = {`/${}`}> Inspect tutor</Link> */}
            {/* <TutorProfile tutor= {tutor}/> */}
          </li>
        );

      })}
      </ul>
    </>
  );
}