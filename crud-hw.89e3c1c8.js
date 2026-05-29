async function t(){return(await fetch("http://localhost:3000/students")).json()}async function e(t){let e={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}};return(await fetch("http://localhost:3000/students",e)).json()}async function n(t){return(await fetch(`http://localhost:3000/students/${t}`,{method:"DELETE"})).json()}async function a(t,e){let n={method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}};return(await fetch(`http://localhost:3000/students/${t}`,n)).json()}let l=document.querySelector(".list"),u=document.getElementById("get-students-btn"),r=document.getElementById("add-student-form"),s=null;async function o(){d(await t())}function d(t){l.innerHTML=t.map(({id:t,name:e,age:n,course:a,skills:l,email:u,isEnrolled:r})=>`<tr id="${t}"><td>${t}</td>
    <td>${e}</td>
    <td>${n}</td>
    <td>${a}</td>
    <td>${l}</td>
    <td>${u}</td>
    <td>${r}</td> 
    <td>
        <button type="button" class="btn_remove" data-action="remove">\u{432}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
    <button type="button" class="btn_edit" data-action="edit">\u{440}\u{435}\u{434}\u{430}\u{433}\u{443}\u{432}\u{430}\u{442}\u{438}</button></td>
    </tr>`).join("")}o(),r.addEventListener("submit",async n=>{n.preventDefault();let l={name:n.currentTarget.elements[0].value,age:n.currentTarget.elements[1].value,course:n.currentTarget.elements[2].value,skills:n.currentTarget.elements[3].value,email:n.currentTarget.elements[4].value,isEnrolled:n.currentTarget.elements[5].checked};null===s?await e(l):await a(s,l),d(await t()),r.reset()}),l.addEventListener("click",async e=>{let a=e.target.dataset.action,l=e.target.closest("tr"),u=l.id;if("remove"===a){await n(u),d(await t());return}"edit"===a&&(s=u,r.elements[0].value=l.querySelectorAll("td")[1].textContent,r.elements[1].value=l.querySelectorAll("td")[2].textContent,r.elements[2].value=l.querySelectorAll("td")[3].textContent,r.elements[3].value=l.querySelectorAll("td")[4].textContent,r.elements[4].value=l.querySelectorAll("td")[5].textContent,r.elements[5].checked="true"===l.querySelectorAll("td")[6].textContent)}),u.addEventListener("click",()=>{o()});
//# sourceMappingURL=crud-hw.89e3c1c8.js.map
