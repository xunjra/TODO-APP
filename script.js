
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const emptyMessage = document.getElementById("emptyMessage");
const submitBtn = document.getElementById("submitBtn");
const filterButtons = document.querySelectorAll(".filter");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";
let editingId = null;

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = "";

    const filteredTasks = tasks.filter(task => {
        if (currentFilter === "pending") return !task.completed;
        if (currentFilter === "completed") return task.completed;
        return true;
    });

    filteredTasks.forEach(task => {
        const li = document.createElement("li");
        li.className = `task ${task.completed ? "completed" : ""}`;

        const completeButton = document.createElement("button");
        completeButton.className = "complete-btn";
        completeButton.textContent = task.completed ? "✓" : "";
        completeButton.addEventListener("click", () => toggleTask(task.id));

        const taskText = document.createElement("span");
        taskText.className = "task-text";
        taskText.textContent = task.title;

        const editButton = document.createElement("button");
        editButton.className = "edit-btn";
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => editTask(task.id));

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteTask(task.id));

        li.append(completeButton, taskText, editButton, deleteButton);
        taskList.appendChild(li);
    });

    const pendingCount = tasks.filter(task => !task.completed).length;

    taskCount.textContent = `${pendingCount} pending / ${tasks.length} total`;
    emptyMessage.style.display = filteredTasks.length === 0 ? "block" : "none";
}

function addTask(title) {
    const newTask = {
        id: Date.now().toString(),
        title: title,
        completed: false
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();
}

function editTask(id) {
    const task = tasks.find(task => task.id === id);

    taskInput.value = task.title;
    editingId = id;
    submitBtn.textContent = "Update Task";
    taskInput.focus();
}

function updateTask(id, title) {
    tasks = tasks.map(task =>
        task.id === id ? { ...task, title } : task
    );

    saveTasks();
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);

    if (editingId === id) {
        resetForm();
    }

    saveTasks();
    renderTasks();
}

function toggleTask(id) {
    tasks = tasks.map(task =>
        task.id === id
            ? { ...task, completed: !task.completed }
            : task
    );

    saveTasks();
    renderTasks();
}

function resetForm() {
    editingId = null;
    taskInput.value = "";
    submitBtn.textContent = "Add Task";
}

taskForm.addEventListener("submit", event => {
    event.preventDefault();

    const title = taskInput.value.trim();

    if (!title) return;

    if (editingId) {
        updateTask(editingId, title);
    } else {
        addTask(title);
    }

    resetForm();
});

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentFilter = button.dataset.filter;

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        renderTasks();
    });
});

renderTasks();
