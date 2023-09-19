/**
 * @file Tasks.ts
 * 
 * A class that will store the tasks.  
 * each class has a name, a description and a status.
 * it also has the number of hours it has been worked on
 * 
 */

import Task from './Task';


class Tasks {
    tasks: Map<string, Task>;

    constructor() {
        this.tasks = new Map<string, Task>();
    }

    addTask(name: string, description: string, status: boolean, hours: number) {
        // add the task if a task with the same name does not exist
        if (this.tasks.has(name)) {
            return;
        }
        // generate a new task
        const task = new Task(name, description, status, hours);
        // add the task to the map
        this.tasks.set(name, task);
    }

    getTasks(): Task[] {
        //return a list of all the tasks
        return Array.from(this.tasks.values());
    }

    getTask(name: string): Task | undefined {
        // return the task if it exists
        return this.tasks.get(name);
    }

    deleteTask(name: string) {
        // remove the task if it exists
        this.tasks.delete(name);
    }

    updateTask(name: string, description: string, status: boolean, hours: number) {
        // update the task if it exists
        const task = new Task(name, description, status, hours);
        this.tasks.set(name, task);
    }
}

export default Tasks;
