document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');   
  
  
    let tasks = JSON.parse(localStorage.getItem('tasks')   
   || '[]');
  
    function loadTasks() {
      tasks.forEach((taskText) => {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
  
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');   
  
        removeButton.addEventListener('click',   
   () => {
          listItem.remove();
          tasks = tasks.filter((t) => t !== taskText);
          localStorage.setItem('tasks', JSON.stringify(tasks));
        });
  
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
      });
    }
  
    function addTask() {
      const taskText = taskInput.value.trim();
  
      if (taskText === '') {
        alert('Please enter a task.');
        return;
      }
  
      tasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(tasks));   
  
  
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
  
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-btn');   
  
      removeButton.addEventListener('click',   
   () => {
        listItem.remove();
        tasks = tasks.filter((t) => t !== taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      });
  
      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);
  
      taskInput.value = '';
    }
  
    loadTasks();
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  });