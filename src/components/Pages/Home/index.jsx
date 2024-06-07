import React, { useContext } from 'react'
import { TasksContext } from '../../../context/TasksContext'
import TasksContainer from '../../TasksContainer';

const Home = ({img}) => {

    const { tasks, setTasks, tasksToday} = useContext(TasksContext);


    return (
       <TasksContainer tasks={tasks} tasksToday={tasksToday} setTasks={setTasks} img={img} text={'Todas'} allList={true}/>
    )
}

export default Home