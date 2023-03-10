import TutorIcon from './Tutor-icon';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

export default function Tutors (props) {

  const navigate = useNavigate();
  return (
    <>
      <ul>
        <li>
          <Link to= '/hello'>Hello Page</Link>
        </li>
        {props.tutors.map(tutor => {
        return (
          <li key = {tutor._id}
            className='tutor'
            tutor = {tutor}
            onClick={() => {
              navigate(`/tutors/${tutor.email}`);
            }
            }
          >
            <TutorIcon profilePictureUrl = {tutor.profilePictureUrl}/>
          </li>
        );

      })}
      </ul>
    </>
  );
}