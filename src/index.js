// Adding an event listener
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskDescription = document.getElementById('new-task-description').value;
    const taskElement = document.createElement('li');
    taskElement.textContent = taskDescription;
    taskList.appendChild(taskElement);
    document.getElementById('new-task-description').value = '';
  });
  });