import {TaskType} from "../model/TaskType";
import axios from "axios";

class TaskClientService {

    static async getAll() {
            const response = await axios.get<TaskType[]>("api/tasks")
            return response.data
    }

    static async createTask(reqBody: any) {
        const response = await axios.post<any>("api/tasks", {...reqBody, Headers: 'application/json'})
        return response.data
    }

    static async update(reqBody: any) {
        const response = await axios.put<any>("api/tasks" , {...reqBody, Headers: 'application/json'})
        return response.data
    }


}

export default TaskClientService