import { createContext, useEffect, useState } from "react";



export const TasksContext = createContext()


export const TasksProvider = ({ children }) => {

    const date = new Date();
    const [tasks, setTasks] = useState([])

    const [dateAtual, setDateAtual] = useState(
        {
            day: date.getDate(),
            month: date.getMonth()
            
        }
    ) 

  
    

useEffect(() => {
    if (localStorage.tasks != undefined) {
        setTasks([...JSON.parse(localStorage.tasks)])
    }

}, [])

const tasksToday = tasks.filter((task) => {
    let currentDay = task.date.split('-')[2]
    let currentMonth = task.date.split('-')[1]
    return currentDay == dateAtual.day && currentMonth == dateAtual.month + 1
})


const daysQuantity = (mouth, year) => {
    let days = 32 - new Date(year, mouth, 32).getDate();
    let arrDays = []
    let count = 0
    do {
        arrDays.push(count + 1)
        count++
    } while (count < days);

    return arrDays 
}


const daysMonth = daysQuantity(dateAtual.month , date.getFullYear())


return (
    <TasksContext.Provider value={{ tasks, setTasks, date, tasksToday, daysMonth, dateAtual, setDateAtual}}>{children}</TasksContext.Provider>
)
}