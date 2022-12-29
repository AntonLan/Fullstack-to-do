import React from 'react';
import MenuStatus from "./MenuStatus";
import {TaskType} from "../model/TaskType";

interface UpdateFormProps {
    task: TaskType
    updateTask: (task: any) => void
    changeHandler: (event: any) => void
    onClose: () => void
}

const UpdateForm = ({task, updateTask, onClose, changeHandler}: UpdateFormProps) => {
    return (
        <div>
            <div className="flex flex-col m-2 ml-6 mr-6 w-80">
                <input disabled
                       className="input-form"
                       value={task.author}
                       type="text"
                       name="author"
                       placeholder="User Create">
                </input>
                <input disabled
                       className="input-form mt-2"
                       value={task.userAssigned}
                       type="text"
                       name="userAssigned"
                       placeholder="User Assigned">
                </input>
                <input disabled
                       className="input-form mt-2"
                       value={task.taskDescription}
                       type="text"
                       name="taskDescription"
                       placeholder="Task Description">
                </input>
                <MenuStatus data={task}
                    changeStatus={changeHandler}
                />
                <button
                    className="btn mt-2"
                    onClick={() => {
                        updateTask(task)
                        onClose()
                    }}>
                    Apply change
                </button>
            </div>
        </div>
    );
};

export default UpdateForm;