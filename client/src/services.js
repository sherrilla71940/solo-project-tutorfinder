export async function getTutors (setter) {
  fetch('http://localhost:1000/tutors')
    .then(res => res.json())
    .then(data =>  setter(data));
}

export async function getTutor (email, setter) {
  fetch(`http://localhost:1000/tutor?email=${email}`)
    .then(res => res.json())
    .then(data => setter(data));
}

