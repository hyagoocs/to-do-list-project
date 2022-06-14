const inputElement = document.querySelector(".new-task-input");
const addTask = document.querySelector(".input-task-button");

const taskContainer = document.querySelector(".task-container");

const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
    const inputIsValid = validateInput();

    if (!inputIsValid) {
        return inputElement.classList.add("error");
    }

    const taskItemContainer = document.createElement('div');
    taskItemContainer.classList.add('task-item');

    const taskContent = document.createElement('p');
    taskContent.innerText = inputElement.value;

    taskContent.addEventListener('click', () => handleClick(taskContent));

    const deleteItem = document.createElement('i');
    deleteItem.classList.add('fa-solid');
    deleteItem.classList.add('fa-trash-can');

    deleteItem.addEventListener('click', () => handleDeleteclick(taskItemContainer, taskContent))

    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);

    taskContainer.appendChild(taskItemContainer);
};

const handleClick = (taskContent) => {
    const tasks = taskContainer.childNodes;

    for (const task of tasks) {
        if (task.firstChild.isSameNode(taskContent)) {
            task.firstChild.classList.toggle('completed');
        }
    }
}

const handleDeleteclick = (taskItemContainer, taskContent) => {
    const tasks = taskContainer.childNodes;

    for (const task of tasks) {
        if (task.firstChild.isSameNode(taskContent)) {
            taskItemContainer.remove();
        }
    }
}

const handleInputChange = () => {
    const inputIsValid = validateInput();

    if (inputIsValid) {
        return inputElement.classList.remove("error");
    }
};

addTask.addEventListener("click", () => handleAddTask());
inputElement.addEventListener("change", () => handleInputChange());

