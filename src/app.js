const listRef = document.querySelector('.list')
const btnRef = document.getElementById('get-students-btn')


// Функція для отримання всіх студентів



function getStudents() {

    return fetch('http://localhost:3000/students').then(res => res.json())

 }



// Функція для відображення студентів у таблиці

function renderStudents(students) {

 const item = students.map(({id, name , age, course, skills, email, isEnrolled}) => {
    return `<tr><td>${id}</td>
    <td>${name}</td>
    <td>${age}</td>
    <td>${course}</td>
    <td>${skills}</td>
    <td>${email}</td>
    <td>${isEnrolled}</td> 
    <td></td>
    </tr>`
 }).join('')

 listRef.innerHTML = item

}



// Функція для додавання нового студента

function addStudent(e) {

 // твій код

  

}



// Функція для оновлення студента

function updateStudent(id) {

 // твій код



 }



// Функція для видалення студента

function deleteStudent(id) {

    // твій код

}


btnRef.addEventListener('click',() => {
getStudents().then(res => renderStudents(res))
})