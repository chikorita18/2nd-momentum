const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //어떤것이든 string으로 변경시켜줌 멋지다!
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
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
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
  console.log("This is ", item);
} //arrow function으로도 쓸 수 있음

const savedToDos = localStorage.getItem(TODOS_KEY);

console.log(savedToDos);

if (savedToDos !== null) {
  //아무것도 없지 않다면!
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); //각각 array의 item function 실행시켜줌
}

//parsedToDos.forEach((item) => console.log("This is , item"));
