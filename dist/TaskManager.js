"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
class TaskManager {
    constructor() {
        this.tasks = [];
        this.currentId = 1;
    }
    // Adds a new task with a name and auto-incrementing ID
    addTask(name) {
        if (typeof name !== 'string') {
            throw new Error("Task name must be a string");
        }
        const newTask = {
            id: this.currentId,
            name,
            status: "Pending", // Default status for new tasks
        };
        this.tasks.push(newTask);
        this.currentId++; // Increment the ID for the next task
    }
    // Marks a task as completed by its ID
    completeTask(id) {
        const task = this.tasks.find(task => task.id === id);
        if (!task) {
            throw new Error(`Task with ID ${id} not found.`);
        }
        task.status = "Completed"; // Update the status of the found task
    }
    // Displays all tasks in the required format
    displayTasks() {
        this.tasks.forEach(task => {
            console.log(`Task ID: ${task.id}, Name: "${task.name}", Status: ${task.status}`);
        });
    }
}
exports.TaskManager = TaskManager;
//# sourceMappingURL=TaskManager.js.map