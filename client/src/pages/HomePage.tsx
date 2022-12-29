import Loader from "../component/Loader";
import ErrorMessage from "../component/ErrorMessage";
import Table from "../component/Table";
import React from "react";
import {useTasks} from "../hooks/useTasks";
import TaskModal from "../component/window/TaskModal";
import {useModal} from "../hooks/UseModal";
import CreateButton from "../component/CreateButton";
import NotFoundMessage from "../component/NotFoundMessage";


const HomePage = () => {

    const {data, loading, error, addTask, form, changeHandler, disabledButton, editButton, updateTask, removeTask, handleSelect} = useTasks()
    const {isOpen, handleCreateOpen, handleOpenEditModal, updateSelectTaskStatus, handleClose, selectTask, mode} = useModal()


    return (
        <div className="flex-col justify-center">
            {loading && <Loader/>}

            <CreateButton handleCreateOpen={handleCreateOpen}/>
            <Table removeTask={removeTask}
                   editButton={editButton}
                   handleOpenEditModal={handleOpenEditModal}
                   handleSelected={handleSelect}
                   rowData={data!}/>
            {data?.length === 0 && <NotFoundMessage/>}
            {error && <ErrorMessage message={error}/>}
            {isOpen && <TaskModal onClose={handleClose}
                                  form={form}
                                  changeHandler={changeHandler}
                                  disabledButton={disabledButton}
                                  updateTaskStatus={updateSelectTaskStatus}
                                  rowData={selectTask!}
                                  mode={mode}
                                  updateTask={updateTask}
                                  addNewTask={addTask}/>}
        </div>
    );
}

export default HomePage