import React, { useContext, useState } from 'react'
import './TaskForm.css'
import { TasksContext } from '../../context/TasksContext'

//Gerador de ID
import { v4 as uuidv4 } from 'uuid';


const TaskForm = () => {

    const { tasks, setTasks } = useContext(TasksContext);

    const [data, setData] = useState({
        tarefa: '',
        date: '',
        tipo: '',
        done: false,
        id: uuidv4()
    })

    const handleData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const addTask = (e) => {
        e.preventDefault()
        if (!tasks.some((task) => task.tarefa.toUpperCase() === data.tarefa.toUpperCase() && task.date.toUpperCase() === data.date.toUpperCase() )) {
            setTasks([...tasks, data]);
            localStorage.tasks = JSON.stringify([...tasks, data])
            setData({
                tarefa: '',
                date: '',
                tipo: '',
            }) 
        } else {
              throw Error ('Tarefa já adicionada')  
        }

    }


    return (
        <form onSubmit={addTask}>
            <div className='input-group'>
                <input type="text" name="tarefa" id="tarefa" value={data.tarefa} onChange={handleData} placeholder='O que você precisa fazer?' required />
            </div>
            <div className='input-group'>
                <label htmlFor="date">Data : </label>
                <input type="date" name="date" id="date" value={data.date} onChange={handleData} required />
            </div>
            <fieldset>
                <div className='options-radio'>
                    <div>
                        <label htmlFor="pessoal">Pessoal</label>
                        <input type="radio" name="tipo" id='pessoal' value="pessoal" onChange={handleData} required />
                    </div>
                    <div>
                        <label htmlFor="compras">Compras</label>
                        <input type="radio" name="tipo" id='compras' value="compras" onChange={handleData} />
                    </div>
                    <div>
                        <label htmlFor="trabalho">Saúde</label>
                        <input type="radio" name="tipo" id='saude' value="saude" onChange={handleData} />
                    </div>
                </div>
            </fieldset>
            <button type='submit' className='btn-add'>Adicionar</button>
        </form>
    )
}

export default TaskForm