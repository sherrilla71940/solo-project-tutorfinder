export default function TutorProfile ({tutor}) {
  return (
    <>
    <h2>Tutor Name: {tutor.fullName}</h2>
    <h2>age: {tutor.age}</h2>
    <h2>email: {tutor.email} </h2>
    <h2>{tutor.profilePictureUrl}</h2>
    </>
  );
}