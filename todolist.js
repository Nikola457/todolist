const todoinput = document.getElementById('input');
const todoButton = document.querySelector('.submit');
const todoList = document.querySelector('.todolist');
const button = document.querySelector('.showDoneTasks');
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteItem);

function addTodo(event){
   event.preventDefault();
   if((todoinput.value == '') || (todoinput.value == null)){

       document.getElementById("input").style.border="2px solid #d44d4d";
       let msg = document.getElementById('msg');
       msg.classList.toggle('msgpop');
       return false;
   }
   else {
   const todoDiv = document.createElement('div');
   todoDiv.classList.add('todo');
   //create li
   const newTodo = document.createElement('li');
   newTodo.innerText = todoinput.value;
   newTodo.classList.add('todoitems');
   todoDiv.appendChild(newTodo);
   const done= document.createElement('button');
   done.innerHTML='<i class="fas fa-check"></i>';
   done.classList.add('done');
   todoDiv.appendChild(done);
   const trash= document.createElement('button');
   trash.innerHTML='<i class="fas fa-trash"></i>';
   trash.classList.add('deletebtn');
   todoDiv.appendChild(trash);
   todoList.appendChild(todoDiv);
   document.getElementById("input").style.border="2px solid #22ce5b";
   todoinput.value = "";
   let msgreen = document.getElementById('msgreen');
   msgreen.classList.toggle('msgreen1');
   
return true;    
}
}
function  deleteItem(e){
    const item = e.target;
    if(item.classList[0] === 'deletebtn'){
        const todo = item.parentElement;
        todo.classList.add("deleteanimation");
        todo.addEventListener("transitionend", function(){
            todo.remove();
        })
    }
    if(item.classList[0] === 'done'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
        const todoDiv = document.createElement('div');
       }
}
