let t=document.querySelector(".list");document.getElementById("get-students-btn").addEventListener("click",()=>{fetch("http://localhost:3000/students").then(t=>t.json()).then(d=>{t.innerHTML=d.map(({id:t,name:d,age:e,course:n,skills:l,email:s,isEnrolled:i})=>`<tr><td>${t}</td>
    <td>${d}</td>
    <td>${e}</td>
    <td>${n}</td>
    <td>${l}</td>
    <td>${s}</td>
    <td>${i}</td> 
    <td></td>
    </tr>`).join("")})});
//# sourceMappingURL=crud-hw.21e4ec45.js.map
