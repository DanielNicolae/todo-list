(()=>{"use strict";function e(e){const t=e.target;if("trashButton"===t.classList[0]){const e=t.parentElement;e.classList.add("scaleDown"),e.addEventListener("transitionend",(()=>{e.remove()}))}}function t(e){const t=e.target;if("completedButton"===t.classList[0]){const e=t.parentElement;"completed"===e.classList[1]?e.classList.remove("completed"):e.classList.add("completed")}}const n=document.querySelector(".todoList");function c(e){n.childNodes.forEach((t=>{switch(e.target.value){case"all":t.style.display="grid";break;case"completed":t.classList.contains("completed")?t.style.display="grid":t.style.display="none";break;case"uncompleted":t.classList.contains("completed")?t.style.display="none":t.style.display="grid"}}))}document.querySelector(".datePicker"),document.querySelector(".selectedDate");const s=document.querySelector(".dates"),o=document.querySelector(".datePicker .dates .month .date"),a=(document.querySelector(".datePicker .dates .days"),["January","February","March","April","May","June","July","August","September","Octomber","November","December"]);let d=new Date,l=(d.getDate(),d.getMonth()),i=d.getFullYear();const r=document.querySelector(".todoInput"),u=document.querySelector(".todoButton"),m=document.querySelector(".todoList"),p=document.querySelector(".filterTasks"),y=document.querySelector(".inputDescription"),L=document.querySelector(".datePicker"),h=document.querySelector(".datePicker .dates .month .nextMonth"),v=document.querySelector(".datePicker .dates .month .prevMonth");u.addEventListener("click",(function(n){n.preventDefault();const c=document.createElement("div");c.classList.add("todoTaskContainer");const s=document.createElement("li");s.classList.add("todoTask"),s.innerText=r.value;const o=document.createElement("button");o.innerHTML='<i class="fas fa-check"></i>',o.classList.add("completedButton"),o.addEventListener("click",t),c.appendChild(o),c.appendChild(s);const a=document.createElement("button");a.innerHTML='<i class="fas fa-trash"></i>',a.classList.add("trashButton"),a.addEventListener("click",e),c.appendChild(a),m.appendChild(c),r.value="";const d=document.createElement("p");d.classList.add("todoDescription"),d.innerText=y.value;const l=document.createElement("p");l.classList.add("todoDate"),c.appendChild(d),c.appendChild(l),y.value=""})),p.addEventListener("click",c),L.addEventListener("click",(function(e){console.log(e.target),e.target.classList.contains("selectedDate")&&s.classList.toggle("active")})),h.addEventListener("click",(function(e){l++,l>11&&(l=0,i++),o.textContent=a[l]+" "+i})),v.addEventListener("click",(function(e){l--,l<0&&(l=11,i--),o.textContent=a[l]+" "+i})),c(),o.textContent=a[l]+" "+i})();