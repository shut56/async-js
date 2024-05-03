const task = {
  id: '',
  text: '',
  isDone: false,
  createdAt: '',
  updatedAt: '',
  isDeleted: false,
};

let taskList = [];

const createBtn = document.getElementById('create-btn');

const taskListContainer = document.getElementById('task-list');

createBtn.addEventListener('click', createTask);

function createTask() {
  const currentDate = new Date().toISOString();
  taskList.push({
    ...task,
    id: Date.now(),
    createdAt: currentDate,
    updatedAt: currentDate,
  });

  const taskCard = document.createElement('div');
  taskCard.className = 'task-card';
  taskCard.textContent = 'New task';

  taskListContainer.append(taskCard);
}
