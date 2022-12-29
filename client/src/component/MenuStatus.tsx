import React from 'react';
import {TaskStatusEnum} from "../model/TaskStatusEnum";

interface MenuStatusProps {
    changeStatus: (e:any) => void
    data?: any
}

const MenuStatus = ({changeStatus, data}: MenuStatusProps) => {

    const getValue = (): string => {
        if (data === undefined) {
            return "To Do"
        }
        return data.status
    }

    return (
        <div>
            <select name="status"
                    value={getValue()}
                    onChange={changeStatus}
                    className="mt-2 select-status">
                <option value={TaskStatusEnum.TO_DO}>{TaskStatusEnum.TO_DO}</option>
                <option value={TaskStatusEnum.IN_PROGRESS}>{TaskStatusEnum.IN_PROGRESS}</option>
                <option value={TaskStatusEnum.DONE}>{TaskStatusEnum.DONE}</option>
                <option value={TaskStatusEnum.IN_REVIEW}>{TaskStatusEnum.IN_REVIEW}</option>
            </select>
        </div>
    );
};

export default MenuStatus;