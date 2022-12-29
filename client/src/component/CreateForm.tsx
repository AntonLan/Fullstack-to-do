import React from 'react';
import MenuStatus from "./MenuStatus";
import {TaskType} from "../model/TaskType";

interface CreateFormTask {
    task: TaskType
    createTask: () => void
    changeHandler: (event:any) => void
    disabled: () => boolean
    onClose: () => void
}

const CreateForm = ({ task, createTask, changeHandler, onClose, disabled }: CreateFormTask ) => {
    return (
        <div className="flex flex-col m-2 ml-6 mr-6 w-80">
            <input
                className="input-form"
                value={task.author}
                type="text"
                name="author"
                onChange={changeHandler}
                placeholder="User Create">
            </input>
            <input
                className="input-form mt-2"
                value={task.userAssigned}
                type="text"
                name="userAssigned"
                onChange={changeHandler}
                placeholder="User Assigned">
            </input>
            <input
                className="input-form mt-2"
                value={task.taskDescription}
                type="text"
                name="taskDescription"
                onChange={changeHandler}
                placeholder="Task Description">
            </input>
            <MenuStatus
                changeStatus={changeHandler}
            />
            <button
                disabled={disabled()}
                className="btn mt-2"
                onClick={() => {
                    createTask()
                    onClose()
                }}>
                Add new task
            </button>
        </div>
    );
};

export default CreateForm;