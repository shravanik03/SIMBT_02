const tabIcons = document.querySelector(".tab-icons");
const input = document.querySelector(".to-do-input");
const addButton = document.querySelector(".add-btn");
const todoPending = document.querySelector("#pending");
const todoCompleted = document.querySelector("#completed");
const mainList = document.querySelector(".main-list-section");
const pendingIcon = document.querySelector("#btn-pending");
const completeIcon = document.querySelector("#btn-complete")

tabIcons.addEventListener('click',(e)=>{
    if(e.target.classList.contains('pending-btn') || e.target.classList.contains('fa-clipboard-list')){
        todoPending.style.display = "block";
        todoCompleted.style.display = "none";
        pendingIcon.classList.add("active-link");
        if(completeIcon.classList.contains("active-link")){
            completeIcon.classList.remove("active-link");
        }
    }
    else if(e.target.classList.contains('complete-btn') || e.target.classList.contains('fa-calendar-check') ){
        todoPending.style.display = "none";
        todoCompleted.style.display = "block";
        completeIcon.classList.add("active-link");
        if(pendingIcon.classList.contains("active-link")){
            pendingIcon.classList.remove("active-link");
        }
    }
});

//Activate add Button
input.addEventListener("keypress", ()=>{
    if(input.value.trim() !== ""){
        addButton.classList.add("activate-btn");
    }
    else{
        addButton.classList.remove("activate-btn");
    }
});

//Add new task
addButton.addEventListener("click",()=>{
    const itemVal = input.value.trim();
    if(itemVal !== ""){
        let newItem = document.createElement('div');
        let newInput = document.createElement('input');
        let newButtonDiv = document.createElement('div');
        newItem.classList.add("item");
        newInput.setAttribute("type","text");
        newInput.setAttribute("class","item-input");
        newInput.setAttribute("value",itemVal);
        newInput.setAttribute("disabled",true);
        newItem.appendChild(newInput);
        newButtonDiv.classList.add("item-btns");
        newButtonDiv.innerHTML = `<button class="edit-btn"><i title="Edit" class="fas fa-edit"></i></button>
        <button class="delete-btn"><i title="Delete" class="fa-sharp fa-solid fa-trash"></i></button>
        <button class="complete-btn"><i title="Mark as complete" class="fa-solid fa-check"></i></button>`
        newItem.appendChild(newInput);
        newItem.appendChild(newButtonDiv);
        todoPending.appendChild(newItem);
        input.value="";
        addButton.classList.remove("activate-btn");
    }
});

//Delete, Edit and Complete a task
mainList.addEventListener('click', (e)=>{
    if(e.target.classList.contains('fa-trash')){
        e.target.parentElement.parentElement.parentElement.remove();
    }
    else if(e.target.classList.contains('fa-edit')){
       const inp = e.target.parentElement.parentElement.parentElement.firstElementChild;
       inp.disabled = !inp.disabled;
    }
    else if(e.target.classList.contains('fa-check')){
        const itemDiv = e.target.parentElement.parentElement.parentElement;
        todoPending.removeChild(itemDiv);
        itemDiv.lastElementChild.innerHTML = `<button class="del-btn"><i title="Delete" class="fa-sharp fa-solid fa-trash"></i></button>`
        console.log(itemDiv)
        todoCompleted.appendChild(itemDiv);
    }
});