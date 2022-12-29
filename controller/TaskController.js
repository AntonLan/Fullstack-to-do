import taskService from "../service/TaskService.js";

class TaskController {


    async createList(req, res) {
        try {
            const task = await taskService.createList(req.body)
            res.json(task)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getUsersList(req, res) {
        try {
            const tasks = await taskService.getUsers()
            return res.json(tasks)
        } catch (e) {
            res.status(500).json(e)
        }
    }


    async create(req, res) {
        try {
            const task = await taskService.create(req.body)
            res.json(task)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const tasks = await taskService.getAll()
            return res.json(tasks)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getTask(req, res) {
        try {
            const task = await taskService.getTask(req.params.id)
            return res.json(task)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const updatedTask = await taskService.update(req.body)
            return res.json(updatedTask)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const task = await taskService.delete(req.params.id)
            return res.json(task)

        } catch (e) {
            res.status(500).json(e)
        }
    }


}

export default new TaskController();