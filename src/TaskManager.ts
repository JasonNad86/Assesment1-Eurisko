export class TaskManager {
    private tasks: { id: number; name: string; status: string }[] = [];
    private currentId: number = 1;

    addTask(name: string): void {
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

    completeTask(id: number): void {
        const task = this.tasks.find(task => task.id === id); //Check if id's match
        if (!task) {
            throw new Error(`Task with ID ${id} not found.`);
        }
        task.status = "Completed"; // Update the status of the found task
    }

    displayTasks(): void {
        this.tasks.forEach(task => {
            console.log(`Task ID: ${task.id}, Name: "${task.name}", Status: ${task.status}`);
        });
    }
}
