export default async function deleteStudent(id) {

    const res = await fetch(`http://localhost:3000/students/${id}`,{
        method: 'DELETE',
    })
    return res.json()

}