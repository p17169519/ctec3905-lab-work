"use strict";

function addItem(text, done) {
  const item = document.createElement('li');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const button = document.createElement('button');
  button.textContent = "×";
  button.addEventListener('click', ev => {
  item.remove();
  });

  item.textContent = text;
  input.type = "checkbox";
  input.checked = done;
  input.id = `todo${todo.querySelectorAll('li').length + 1}`;
  label.htmlFor = input.id;
  item.appendChild(input);
  item.appendChild(label);
  todo.appendChild(item);
  item.appendChild(button);

}

add.addEventListener('click', ev => {
  addItem(text.value);
});

function clearList() {
  while(todo.firstChild) {
    todo.removeChild(todo.firstChild);
  }
}

clear.addEventListener('click', ev => {
  clearList();
});
