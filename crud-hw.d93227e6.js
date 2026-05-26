function t(){return fetch("http://localhost:3000/students").then(t=>t.json())}let e=document.querySelector(".list"),n=document.getElementById("get-students-btn"),l=document.getElementById("add-student-form"),u=null;function r(t){e.innerHTML=t.map(({id:t,name:e,age:n,course:l,skills:u,email:r,isEnrolled:d})=>`<tr id="${t}"><td>${t}</td>
    <td>${e}</td>
    <td>${n}</td>
    <td>${l}</td>
    <td>${u}</td>
    <td>${r}</td>
    <td>${d}</td> 
    <td>
        <button type="button" class="btn_remove" data-action="remove">\u{432}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
    <button type="button" class="btn_edit" data-action="edit">\u{440}\u{435}\u{434}\u{430}\u{433}\u{443}\u{432}\u{430}\u{442}\u{438}</button></td>
    </tr>`).join("")}t().then(t=>r(t)),l.addEventListener("submit",e=>{var n;e.preventDefault();let d={name:e.currentTarget.elements[0].value,age:e.currentTarget.elements[1].value,course:e.currentTarget.elements[2].value,skills:e.currentTarget.elements[3].value,email:e.currentTarget.elements[4].value,isEnrolled:e.currentTarget.elements[5].checked};null===u&&fetch("http://localhost:3000/students",{method:"POST",body:JSON.stringify(d),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(t=>t.json()).then(t).then(t=>r(t)),(n=u,fetch(`http://localhost:3000/students/${n}`,{method:"PATCH",body:JSON.stringify(d),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(t=>t.json())).then(t).then(t=>r(t)),l.reset()}),e.addEventListener("click",e=>{let n=e.target.dataset.action,d=e.target.closest("tr"),o=d.id;if("remove"===n)return void fetch(`http://localhost:3000/students/${o}`,{method:"DELETE"}).then(t=>t.json()).then(t).then(t=>r(t));"edit"===n&&(u=o,l.elements[0].value=d.querySelectorAll("td")[1].textContent,l.elements[1].value=d.querySelectorAll("td")[2].textContent,l.elements[2].value=d.querySelectorAll("td")[3].textContent,l.elements[3].value=d.querySelectorAll("td")[4].textContent,l.elements[4].value=d.querySelectorAll("td")[5].textContent,l.elements[5].checked="true"===d.querySelectorAll("td")[6].textContent)}),n.addEventListener("click",()=>{t().then(t=>r(t))});
//# sourceMappingURL=crud-hw.d93227e6.js.map
