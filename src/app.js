const listRef = document.querySelector(".list");
const btnRef = document.getElementById("get-students-btn");
const formRef = document.getElementById("add-student-form");
import getStudents from "./api/getStudents";
import postStudents from "./api/postStudents";
import deleteStudent from "./api/deletStudents";
import updateStudent from "./api/updateStudents";

let curentID = null

getStudents().then((res) => renderStudents(res));

function renderStudents(students) {
  const item = students
    .map(({ id, name, age, course, skills, email, isEnrolled }) => {
      return `<tr id="${id}"><td>${id}</td>
    <td>${name}</td>
    <td>${age}</td>
    <td>${course}</td>
    <td>${skills}</td>
    <td>${email}</td>
    <td>${isEnrolled}</td> 
    <td>
        <button type="button" class="btn_remove" data-action="remove">видалити</button>
    <button type="button" class="btn_edit" data-action="edit">редагувати</button></td>
    </tr>`;
    })
    .join("");

  listRef.innerHTML = item;
}

formRef.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    name: e.currentTarget.elements[0].value,
    age: e.currentTarget.elements[1].value,
    course: e.currentTarget.elements[2].value,
    skills: e.currentTarget.elements[3].value,
    email: e.currentTarget.elements[4].value,
    isEnrolled: e.currentTarget.elements[5].checked,
  };
  if(curentID === null){
  postStudents(data)
    .then(getStudents)
    .then((res) => renderStudents(res));
  }

  updateStudent(curentID, data).then(getStudents).then(res => renderStudents(res))

  formRef.reset();
});

listRef.addEventListener("click", (e) => {
  const action = e.target.dataset.action;
  const td = e.target.closest("tr");
  const id = td.id;

  if (action === "remove") {
    deleteStudent(id)
      .then(getStudents)
      .then((res) => renderStudents(res));
    return;
  }

  if(action === 'edit'){
    curentID = id
    formRef.elements[0].value = td.querySelectorAll('td')[1].textContent
    formRef.elements[1].value = td.querySelectorAll('td')[2].textContent
    formRef.elements[2].value = td.querySelectorAll('td')[3].textContent
    formRef.elements[3].value = td.querySelectorAll('td')[4].textContent
    formRef.elements[4].value = td.querySelectorAll('td')[5].textContent
    formRef.elements[5].checked = td.querySelectorAll('td')[6].textContent === 'true'? true: false
  }
});

btnRef.addEventListener("click", () => {
  getStudents().then((res) => renderStudents(res));
});
