import React, { useContext, useEffect } from 'react'
import { TasksContext } from '../../../context/TasksContext'
import TasksContainer from '../../TasksContainer';

const Compras = ({img}) => {
    const { tasks, setTasks, tasksToday} = useContext(TasksContext);


    const tasksCompras = tasksToday.filter((task) => task.tipo === 'compras')

   
    return (
        <TasksContainer tasks={tasks}  tasksToday={tasksCompras} setTasks={setTasks} img={img} text={'Compras'}/>
    )
}

export default Compras