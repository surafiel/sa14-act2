class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    editTask(index, updatedTask) {
        this.tasks[index] = updatedTask;
    }

    deleteTask(index) {
        this.tasks.splice(index, 1);
    }
}

// Example usage for Todo List
const todoList = new TodoList();
todoList.addTask('Task 1');
todoList.addTask('Task 2');
console.log(todoList.tasks); // Output: ['Task 1', 'Task 2']
todoList.editTask(0, 'Updated Task 1');
console.log(todoList.tasks); // Output: ['Updated Task 1', 'Task 2']
todoList.deleteTask(1);
console.log(todoList.tasks); // Output: ['Updated Task 1']