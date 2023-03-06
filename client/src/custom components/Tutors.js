import TutorIcon from './Tutor-icon';
import TutorProfile from './Tutor-Profile';
import {Link} from 'react-router-dom';

export default function Tutors (props) {
  return (
    <>
      <ul>
        <li>
          <Link to= '/hello'>Hello Page</Link>
        </li>
        {props.tutors.map(tutor => {
        return (
          <li key = {tutor._id} className='tutor' onClick={() => {
          props.handler(tutor)
          }
          }>
            <TutorIcon profilePictureUrl = {tutor.profilePictureUrl}/>
            {/* <Link to = {`/${tutor.email}`}> Inspect tutor</Link> */}
            {/* <TutorProfile tutor= {tutor}/> */}
          </li>
        );

      })}
      </ul>
    </>
  );
}