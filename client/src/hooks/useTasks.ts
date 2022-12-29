import {useEffect, useState} from "react";
import {TaskType} from "../model/TaskType";
import {AxiosError} from "axios";
import TaskClientService from "../API/TaskClientService";
import {TaskStatusEnum} from "../model/TaskStatusEnum";

export function useTasks() {

    const [data, setData] = useState<any[]>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [form, setForm] = useState({
        author: "",
        userAssigned: "",
        taskDescription: "",
        date: "",
        isSelected: false,
        status: TaskStatusEnum.TO_DO
    })

    useEffect(() => {
        fetchResponse().then()
    }, [])

    const addTask = async () => {
            try {
                const utcStr = new Date().toUTCString()
                const reqBody = {...form, date: utcStr}
                const response = await TaskClientService.createTask(reqBody)
                setData([...data!, response])
                setForm({
                    ...form,
                    date: "",
                    taskDescription: "",
                    userAssigned: "",
                    status: TaskStatusEnum.TO_DO,
                    author: ""
                })
            } catch (e) {
                const error = e as AxiosError
                alert(error.message)

            }
        }

    const changeHandler = (event: any) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const disabledButton = () => {
        return !(form.author && form.userAssigned && form.taskDescription);
    }

    const editButton = (task: TaskType) => {
        return task.status === TaskStatusEnum.DONE;

    }

    async function updateTask(task: any) {
        try {
            setError("")
            setLoading(true)
            const response = await TaskClientService.update(task)
            let updateData = data?.map(e => {
                if (e._id === task._id) {
                    return task
                }
                return e
            })
            setData(updateData)
            setLoading(false)
        } catch (e) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    const removeTask = (task: any) => {
        let index = data?.indexOf(task)
        setData(data?.splice(index!, 1))
    }

    const handleSelect = (row: any) => {
        const list = [...data!]
        list.map(e => {
            if (e._id === row._id){
                e.isSelected = !e.isSelected
            }
        })
        setData(list)
    }

    async function fetchResponse() {
        try {
            setError("")
            setLoading(true)
            const data = await TaskClientService.getAll()
            data?.map((e: any) => e.isSelected = false)
            setData(data)
            setLoading(false)
        } catch (e) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    return {data, loading, error, editButton, addTask, form, changeHandler, disabledButton, updateTask, removeTask, handleSelect}
}