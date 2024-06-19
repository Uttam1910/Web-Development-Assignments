document.addEventListener('DOMContentLoaded', function () {
    // Grab DOM elements
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const todoTasksList = document.getElementById('todo-tasks-list');
    const completedTasksList = document.getElementById('completed-tasks-list');
    const taskHistoryList = document.getElementById('task-history-list');

    // Load tasks and history from local storage
    loadTasks();
    loadHistory();

    // Add task
    taskForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form from submitting

        // Get task input value
        const taskValue = taskInput.value.trim();

        if (taskValue !== '') {
            // Create task object
            const task = {
                id: Date.now().toString(),
                text: taskValue,
                completed: false,
                timestamp: new Date().toLocaleString()
            };

            // Add task to local storage
            addTaskToLocalStorage(task);

            // Display task in the To-Do list
            addTaskToTable(task, todoTasksList);

            // Log task in history
            logTaskInHistory(task, 'Added');

            // Clear input
            taskInput.value = '';
        }
    });

    // Remove or toggle complete task
    document.addEventListener('click', function (e) {
        const listItem = e.target.closest('tr');
        const taskId = listItem ? listItem.dataset.id : null;

        if (taskId) {
            if (e.target.classList.contains('remove-task') || e.target.parentElement.classList.contains('remove-task')) {
                // Remove task
                removeTask(taskId);
            } else if (e.target.classList.contains('task-complete')) {
                // Toggle task completion
                const task = getTaskById(taskId);
                if (task) {
                    task.completed = e.target.checked;
                    updateTaskInLocalStorage(task);

                    // Move task to appropriate table
                    if (task.completed) {
                        moveTaskToTable(task, completedTasksList);
                        logTaskInHistory(task, 'Completed');
                    } else {
                        moveTaskToTable(task, todoTasksList);
                        logTaskInHistory(task, 'Reopened');
                    }
                }
            }
        }
    });

    // Load tasks from local storage
    function loadTasks() {
        const tasks = getTasksFromLocalStorage();
        tasks.forEach(task => {
            if (task.completed) {
                addTaskToTable(task, completedTasksList);
            } else {
                addTaskToTable(task, todoTasksList);
            }
        });
    }

    // Get tasks from local storage
    function getTasksFromLocalStorage() {
        const tasks = localStorage.getItem('tasks');
        return tasks ? JSON.parse(tasks) : [];
    }

    // Save tasks to local storage
    function saveTasksToLocalStorage(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Add task to local storage
    function addTaskToLocalStorage(task) {
        const tasks = getTasksFromLocalStorage();
        tasks.push(task);
        saveTasksToLocalStorage(tasks);
    }

    // Update task in local storage
    function updateTaskInLocalStorage(updatedTask) {
        let tasks = getTasksFromLocalStorage();
        tasks = tasks.map(task => task.id === updatedTask.id ? updatedTask : task);
        saveTasksToLocalStorage(tasks);
    }

    // Remove task from local storage
    function removeTaskFromLocalStorage(taskId) {
        let tasks = getTasksFromLocalStorage();
        tasks = tasks.filter(task => task.id !== taskId);
        saveTasksToLocalStorage(tasks);
    }

    // Get task by ID from local storage
    function getTaskById(taskId) {
        const tasks = getTasksFromLocalStorage();
        return tasks.find(task => task.id === taskId);
    }

    // Add task to table
    function addTaskToTable(task, tableBody) {
        const row = document.createElement('tr');
        row.dataset.id = task.id;

        const taskCell = document.createElement('td');
        taskCell.textContent = task.text;

        const actionCell = document.createElement('td');
        const completeLabel = document.createElement('label');
        completeLabel.classList.add('task-complete-label');

        const completeCheckbox = document.createElement('input');
        completeCheckbox.type = 'checkbox';
        completeCheckbox.classList.add('task-complete');
        completeCheckbox.checked = task.completed;

        completeLabel.appendChild(completeCheckbox);
        completeLabel.appendChild(document.createTextNode(' Mark as Completed'));

        const removeBtn = document.createElement('button');
        removeBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        removeBtn.classList.add('remove-task');

        actionCell.appendChild(completeLabel);
        actionCell.appendChild(removeBtn);

        row.appendChild(taskCell);
        row.appendChild(actionCell);

        tableBody.appendChild(row);
    }

    // Move task to table
    function moveTaskToTable(task, newTable) {
        // Remove task from current table
        const currentTable = task.completed ? todoTasksList : completedTasksList;
        const currentRow = currentTable.querySelector(`tr[data-id='${task.id}']`);
        if (currentRow) {
            currentRow.remove();
        }

        // Add task to new table
        addTaskToTable(task, newTable);
    }

    // Remove task
    function removeTask(taskId) {
        // Remove from local storage
        const task = getTaskById(taskId);
        if (task) {
            removeTaskFromLocalStorage(taskId);

            // Log task removal in history
            logTaskInHistory(task, 'Removed');
        }

        // Remove from DOM
        const todoRow = todoTasksList.querySelector(`tr[data-id='${taskId}']`);
        if (todoRow) {
            todoRow.remove();
        }

        const completedRow = completedTasksList.querySelector(`tr[data-id='${taskId}']`);
        if (completedRow) {
            completedRow.remove();
        }
    }

    // Log task in history
    function logTaskInHistory(task, status) {
        const historyRow = document.createElement('tr');

        const taskCell = document.createElement('td');
        taskCell.textContent = task.text;

        const statusCell = document.createElement('td');
        statusCell.textContent = status;

        const timestampCell = document.createElement('td');
        timestampCell.textContent = task.timestamp;

        historyRow.appendChild(taskCell);
        historyRow.appendChild(statusCell);
        historyRow.appendChild(timestampCell);

        taskHistoryList.appendChild(historyRow);

        // Save history to local storage
        saveHistoryToLocalStorage();
    }

    // Load history from local storage
    function loadHistory() {
        const history = getHistoryFromLocalStorage();
        history.forEach(entry => {
            const historyRow = document.createElement('tr');

            const taskCell = document.createElement('td');
            taskCell.textContent = entry.task;

            const statusCell = document.createElement('td');
            statusCell.textContent = entry.status;

            const timestampCell = document.createElement('td');
            timestampCell.textContent = entry.timestamp;

            historyRow.appendChild(taskCell);
            historyRow.appendChild(statusCell);
            historyRow.appendChild(timestampCell);

            taskHistoryList.appendChild(historyRow);
        });
    }

    // Get history from local storage
    function getHistoryFromLocalStorage() {
        const history = localStorage.getItem('taskHistory');
        return history ? JSON.parse(history) : [];
    }

    // Save history to local storage
    function saveHistoryToLocalStorage() {
        const rows = taskHistoryList.querySelectorAll('tr');
        const history = [];
        rows.forEach(row => {
            const task = row.cells[0].textContent;
            const status = row.cells[1].textContent;
            const timestamp = row.cells[2].textContent;
            history.push({ task, status, timestamp });
        });
        localStorage.setItem('taskHistory', JSON.stringify(history));
    }
});
