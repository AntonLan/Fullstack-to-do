import React from "react";
import {TaskType} from "../model/TaskType";
import {TaskModeEnum} from "../model/TaskModeEnum";
import CreateForm from "./CreateForm";
import UpdateForm from "./UpdateForm";


interface FormTaskProps {
    rowData: TaskType
    form: any
    changeHandler: (event: any) => void
    disabledButton: () => boolean
    addTask: () => void
    updateTask: (task: TaskType) => void
    updateTaskStatus: (event: any) => void
    mode: TaskModeEnum
    onClose: () => void
}

const FormTask = ({
                      addTask,
                      onClose,
                      form,
                      changeHandler,
                      disabledButton,
                      updateTask,
                      updateTaskStatus,
                      rowData,
                      mode
                  }: FormTaskProps) => {


    return (
        <div>
            {mode === TaskModeEnum.CREATE_MODE && <CreateForm task={form}
                                                              onClose={onClose}
                                                              createTask={addTask}
                                                              disabled={disabledButton}
                                                              changeHandler={changeHandler}/>}
            {mode === TaskModeEnum.EDIT_MODE && <UpdateForm task={rowData}
                                                            onClose={onClose}
                                                            updateTask={updateTask}
                                                            changeHandler={updateTaskStatus}/>}
        </div>

    )
}

export default FormTask