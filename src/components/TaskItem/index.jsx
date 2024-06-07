import React from 'react'
import './TaskItem.css'
import { MdDelete } from "react-icons/md";
import { MdOutlineDownloadDone } from "react-icons/md";

import { MdOutlineUndo } from "react-icons/md";



const TaskItem = ({ taskObj, removeTask, taskDone, allList }) => {
    return (
        <li className={taskObj.done ? 'taskItem done' : 'taskItem'} >
            <div>
                {taskObj.tarefa}
                {allList ?
                    <p>Categoria: {taskObj.tipo}</p>
                    :
                    null
                }

            </div>
            <div>
                <MdDelete className='delete' onClick={() => removeTask(taskObj.id)} />
                {taskObj.done ?
                    <MdOutlineUndo onClick={() => taskDone(taskObj)} />
                    :
                    <MdOutlineDownloadDone onClick={() => taskDone(taskObj)}
                    />}
            </div>
        </li>
    )
}

export default TaskItem