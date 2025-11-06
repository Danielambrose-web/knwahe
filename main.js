const inputEl = document.getElementById("todo-input-el");
const buttonEl = document.getElementById("add-todo-btn-el");
const todoListEl = document.getElementById("todo-list-el");
// let ulEl;

function addTodo() {
  const todoText = inputEl.value.trim();
  if (!todoText) return; // ignore empty input

  const li = document.createElement("li");
  li.textContent = todoText;

  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    todoListEl.removeChild(li);
  });

  li.appendChild(deleteBtn);
  todoListEl.appendChild(li);
  inputEl.value = "";
}

function sendData() {
  addTodo();
  console.log("Data sent");
}

buttonEl.addEventListener("click", sendData);
inputEl.addEventListener("keydown", function (e) {
  if (e.key === "Enter") sendData();
});
