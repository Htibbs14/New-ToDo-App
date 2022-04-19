let task_input = document.getElementById(text_input);
let submit = document.getElementById(submitButton);
let main_list = document.getElementById(list);

function newTask(event) {
  event.preventDefault();

  let text = task_input.value;

  if (text === "") {
    return;
  }

  let taskList = document.createElement("div");
  taskList.classList.add("taskList");

  let list_content = document.createElement("div");
  list_content.classList.add("content");

  taskList.appendChild(list_content);

  let text_content = document.createElement("input");
  text_content.type = "text";
  text_content.value = text;
  text_content.classList.add("text");
  text_content.setAttribute("readonly", "readonly");

  list_content.appendChild(text_content);

  let actions = document.createElement("div");
  actions.classList.add(actions);

  let edit_button = document.createElement("button");
  edit_button.classList.add("edit");
  edit_button.innerText = "Edit";

  let delete_button = document.createElement("button");
  delete_button.classList.add("delete");
  delete_button.innerText = "Delete";

  actions.appendChild(edit_button);
  actions.appendChild(delete_button);
  taskList.appendChild(actions);
  main_list.appendChild(taskList);

  task_input.value = "";
}

submit.addEventListener("click", newTask);
