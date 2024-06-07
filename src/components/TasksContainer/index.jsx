import './TasksContainer.css'
import TaskItem from '../TaskItem'
import { useContext, useState } from 'react'
import { TasksContext } from '../../context/TasksContext'
import Calender from './Calender'

//icon 

import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";







const TasksContainer = ({ tasks, setTasks, tasksToday, img, text, allList }) => {

    const { daysMonth, dateAtual, setDateAtual } = useContext(TasksContext);

    const monthsName = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Otubro", "Novembro", "Dezembro"];

    const [month, setMonth] = useState(dateAtual.month)

    let tasksDone = tasksToday.filter((task) => task.done)

    let indexCurrentDay = daysMonth.findIndex((day) => day == dateAtual.day)



    const removeTask = (current) => {
        setTasks([...tasks.filter((task) => task.id != current)])
        localStorage.tasks = JSON.stringify(tasks.filter((task) => task.id != current))
    }

    const taskDone = (current) => {
        const currentDone = tasks.map((task) => {
            if (task.id === current.id) {
                task.done = !task.done

            }
            return task
        })

        setTasks([...currentDone])
        localStorage.tasks = JSON.stringify(currentDone)
    }

    const nextMonth = () => {
        if (month === 11) {
            setMonth(0)
            setDateAtual({
                ...dateAtual,
                month: 0
            })
        } else {
            setMonth(month + 1)
            setDateAtual({
                ...dateAtual,
                month: month + 1
            })
        }
    }

    const prevMonth = () => {
        if (month === 0) {
            setMonth(11)
            setDateAtual({
                ...dateAtual,
                month: 11
            })
        } else {
            setMonth(month - 1)
            setDateAtual({
                ...dateAtual,
                month: month - 1
            })
        }
    }

    return (
        <section className='container___main-section'>
            <>
                <div className="info-general" style={{ backgroundImage: `url(${img})` }}>
                    <h1>{text}</h1>
                </div>
                <ul className='info-task'>
                    <h2>Tarefas do Dia</h2>
                    {tasksToday.length > 0 ?
                        tasksToday.map((task) => <TaskItem key={task.id} taskObj={task} removeTask={removeTask} taskDone={taskDone} allList={allList} />)
                        :
                        <h2>Nenhuma Cadastrada</h2>
                    }
                </ul>

                <div className='info-date'>

                    <div className='info-date-data'>
                        <div>
                            <p>Quantidade</p>
                            <span>
                                {tasksToday.length}
                            </span>
                        </div>
                        <div>
                            <p>Concluidas</p>
                            <span>
                                {tasksDone.length}
                            </span>
                        </div>
                        <div>
                            <p>Pendentes</p>
                            <span>
                                {tasksToday.length - tasksDone.length}
                            </span>
                        </div>
                    </div>
                    <div className='calender'>
                        <header>
                            <GrFormPrevious className='prev' onClick={() => prevMonth()} />
                            <h2>{monthsName[month]}</h2>
                            <MdOutlineNavigateNext className='next' onClick={() => nextMonth()} />
                        </header>
                        <table>
                            <thead>
                                <tr>
                                    <td>Dom</td>
                                    <td>Seg</td>
                                    <td>Ter</td>
                                    <td>Qua</td>
                                    <td>Qui</td>
                                    <td>Sex</td>
                                    <td>Sab</td>
                                </tr>
                            </thead>
                            <Calender dayAtual={indexCurrentDay} />
                        </table>
                    </div>
                </div>
            </>
        </section>

    )




}

export default TasksContainer