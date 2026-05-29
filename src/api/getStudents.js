export default async function getStudents() {

    const res = await fetch('http://localhost:3000/students')
    return res.json()

 }