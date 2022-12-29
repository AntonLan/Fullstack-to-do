import {TaskStatusEnum} from "./TaskStatusEnum";

export type TaskType = {
    author: string,
    userAssigned: string,
    taskDescription: string,
    date: string,
    status: TaskStatusEnum,
    isSelected: boolean
}