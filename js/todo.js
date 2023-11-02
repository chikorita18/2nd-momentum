const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos)); //어떤것이든 string으로 변경시켜줌 멋지다!
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span); //li는 자식 span 가짐
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit() {
  event.preventDefault(); //엔터치면 페이지 새로고침 막아줌
  const newTodo = toDoInput.value; //새로운 변수에 복사
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
