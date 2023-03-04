async function getTutors () {
  fetch('http://localhost:1000')
    .then(res => res.json())
    .then(data =>  console.log(data));
}

async function getTutor (email) {
  fetch(`http://localhost:1000/${email}`)
    .then(res => res.json())
    .then(data => console.log(data));
}

