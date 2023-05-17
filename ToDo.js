
   let addToDoButton = document.getElementById('addtodo');

   let removeToDoButton = document.getElementById('removetodo');
let ToDoContainer = document.getElementById('todoContainer');
let InputField = document.getElementById('inputField');

addToDoButton.addEventListener('click',function(){
   var paragraph = document.createElement('p')
   paragraph.innerText = InputField.value;
   ToDoContainer.appendChild(paragraph);
    InputField.value="";
    paragraph.addEventListener('click',function(){
       paragraph.style.textDecoration ="line-through";
    })
    removeToDoButton.addEventListener('click',function(){
       ToDoContainer.removeChild(paragraph);
    })
})