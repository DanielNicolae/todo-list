(()=>{"use strict";function t(t){const e=t.target;if("trashButton"===e.classList[0]){const t=e.parentElement;t.classList.add("scaleDown"),t.addEventListener("transitionend",(()=>{t.remove()}))}}function e(t){const e=t.target;if("completedButton"===e.classList[0]){const t=e.parentElement;"completed"===t.classList[1]?t.classList.remove("completed"):t.classList.add("completed")}}const n=document.querySelector(".todoInput"),s=document.querySelector(".todoButton"),c=document.querySelector(".todoList");s.addEventListener("click",(function(s){s.preventDefault();const a=document.createElement("div");a.classList.add("todoTaskContainer");const o=document.createElement("li");o.classList.add("todoTask"),o.innerText=n.value;const d=document.createElement("button");d.innerHTML='<i class="fas fa-check"></i>',d.classList.add("completedButton"),d.addEventListener("click",e),a.appendChild(d),a.appendChild(o);const i=document.createElement("button");i.innerHTML='<i class="fas fa-trash"></i>',i.classList.add("trashButton"),i.addEventListener("click",t),a.appendChild(i),c.appendChild(a),n.value=""}))})();