import Task from "../model/Task.js";
import Users from "../model/Users.js";

class TaskService {


    async createList(users) {
        const usersList = await Users.create(users)
        return usersList
    }

    async getUsers() {
        const users = await Users.find()
        return users
    }



    async create(task) {
        const createdTask = await Task.create(task)
        return createdTask
    }

    async getAll() {
        const tasks = await Task.find()
        return tasks
    }

    async getTask(id) {
        if (!id) {
            throw new Error("Not assigned ID")
        }
        return await Task.findById(id)
    }

    async update(task) {
        if (!task._id) {
            throw new Error("Not assigned ID")
        }
        return await Task.findByIdAndUpdate(task._id, task)

    }

    async delete(id) {
        if (!id) {
            throw new Error("Not assigned ID")
        }
        return await Task.findByIdAndDelete(id)
    }


}

export default new TaskService()