import React from "react";
import {TaskType} from "../model/TaskType";

interface TableProps {
    rowData: TaskType[]
    handleSelected: (row: any) => void
    removeTask: (task: any) => void
    handleOpenEditModal: (task: any) => void
    editButton: (task: TaskType) => void
}

const Table = ({rowData, handleSelected, removeTask, editButton, handleOpenEditModal}: TableProps) => {


    return (
        <div className="ml-6 mr-6 mt-3">
            <table className="table">
                <thead>
                <tr className="table-row-head">
                    <th align="left"
                        className="table-cell-head pl-2">
                        User Create
                    </th>
                    <th align="left"
                        className="table-cell-head">
                        User Assigned
                    </th>
                    <th align="left"
                        className="table-cell-head">
                        Task Description
                    </th>
                    <th align="left"
                        className="table-cell-head">
                        Date
                    </th>
                    <th align="left"
                        className="table-cell-head">
                        Status
                    </th>
                    <th align="center">
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {rowData?.map((task: any) => {
                    return <tr onClick={() => handleSelected(task)}
                               key={task._id}
                               className={`border-b transition duration-300 ease-in-out hover:bg-gray-100 ${task.isSelected ? "bg-amber-100" : "bg-amber-300"}`}>
                        <td className="table-cell-head pl-2">{task.author}</td>
                        <td className="table-cell-head">{task.userAssigned}</td>
                        <td className="table-cell-head">{task.taskDescription}</td>
                        <td className="table-cell-head">{task.date}</td>
                        <td className="table-cell-head">{task.status}</td>
                        <td>
                            <div className="flex justify-center items-center">
                                <button disabled={editButton(task)!} onClick={() => handleOpenEditModal(task)}
                                        className="btn-table-cell">
                                    <svg className="w-4 h-4"
                                         fill="none"
                                         stroke="currentColor"
                                         viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                                    </svg>
                                </button>
                                <button onClick={() => removeTask(task)}
                                        className="btn-table-cell">
                                    <svg className="w-4 h-4"
                                         fill="currentColor"
                                         viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Table