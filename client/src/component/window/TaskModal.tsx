import React from 'react';
import FormTask from "../FormTask";
import {TaskType} from "../../model/TaskType";
import {TaskModeEnum} from "../../model/TaskModeEnum";

interface TaskModalProps {
    rowData: TaskType
    form: any
    changeHandler: (event: any) => void
    disabledButton: () => boolean
    addNewTask: () => void
    updateTask: (task: any) => void
    updateTaskStatus: (event: any) => void
    onClose: () => void
    mode: TaskModeEnum
}

const TaskModal = ({
                       addNewTask,
                       onClose,
                       updateTask,
                       form,
                       changeHandler,
                       disabledButton,
                       rowData,
                       updateTaskStatus,
                       mode
                   }: TaskModalProps) => {
    return (
        <>
            <div className="bg-form"
                 onClick={onClose}
            />
            <div className="bg-white position-center rounded-2xl">
                <div className="flex justify-between">
                    <div className="text-xl font-bold text-cyan-900 mt-3 ml-6">
                        {mode === TaskModeEnum.CREATE_MODE ? "Create new task" : "Edit task"}
                    </div>
                    <button onClick={onClose}
                            className="btn-close mt-2 mr-2"
                    >
                        <svg className="w-5 h-5" fill="currentColor"
                             viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
                        </svg>
                    </button>
                </div>
                <FormTask mode={mode}
                          form={form}
                          changeHandler={changeHandler}
                          disabledButton={disabledButton}
                          updateTaskStatus={updateTaskStatus}
                          rowData={rowData}
                          onClose={onClose}
                          addTask={addNewTask}
                          updateTask={updateTask}
                />
            </div>
        </>
    );
};

export default TaskModal;