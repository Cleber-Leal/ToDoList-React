import React, { useContext } from 'react'
import { TasksContext } from '../../../context/TasksContext'
import TasksContainer from '../../TasksContainer';

const Pessoal = ({img}) => {

    const { tasks, setTasks, tasksToday } = useContext(TasksContext);

    const tasksPessoal = tasksToday.filter((task) => task.tipo === 'pessoal')
    return (
        <TasksContainer tasks={tasks} tasksToday={tasksPessoal} setTasks={setTasks} img={img} text={'Pessoal'}/>
    )
}

export default Pessoal