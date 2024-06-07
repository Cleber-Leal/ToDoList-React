import React, { useContext } from 'react'
import { TasksContext } from '../../../context/TasksContext'
import TasksContainer from '../../TasksContainer';

const Saude = ({img}) => {

    const { tasks, setTasks, tasksToday } = useContext(TasksContext);

    const tasksSaude = tasksToday.filter((task) => task.tipo === 'saude')
    return (
        <TasksContainer tasks={tasks} tasksToday={tasksSaude} setTasks={setTasks} img={img} text={'Saúde'}/>
    )
}

export default Saude