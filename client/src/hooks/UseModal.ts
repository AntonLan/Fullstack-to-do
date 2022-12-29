import {useState} from "react";
import {TaskModeEnum} from "../model/TaskModeEnum";


export function useModal () {
    const [isOpen, setIsOpen] = useState(false)
    const [selectTask, setSelectTask] = useState<any>()
    const [mode, setMode] = useState(TaskModeEnum.CREATE_MODE)


    const handleCreateOpen = () => {
        setMode(TaskModeEnum.CREATE_MODE)
        setIsOpen(true)

    }

    const handleOpenEditModal = (task: any) => {
        let data = {...task}
        setMode(TaskModeEnum.EDIT_MODE)
        setIsOpen(true)
        setSelectTask(data)
    }

    const updateSelectTaskStatus = (event: any) => {
        const utcStr = new Date().toUTCString()
        setSelectTask({...selectTask, date: utcStr, status: event.target.value})
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    return {isOpen, handleCreateOpen, handleOpenEditModal, handleClose, updateSelectTaskStatus, selectTask, mode}
}