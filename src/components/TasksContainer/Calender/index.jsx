import React, { useContext, useEffect, useState } from 'react'
import './Calender.css'
import { TasksContext } from '../../../context/TasksContext'


const Calender = ({dayAtual}) => {

    let tds = [...document.querySelectorAll("tbody td")]

    const [curretDay, setCurrentDay] = useState(0)

    const {daysMonth, dateAtual, setDateAtual } = useContext(TasksContext);

    const clickTarget = (e) => {

        setDateAtual({
            ...dateAtual,
            day: Number(e.target.innerText)
        })

        e.target.classList.add('active')
    }

    useEffect(() => {
        tds.forEach((td) => {
            td.classList.remove('active')

        })

        if (dayAtual >= 0 && tds.length > 0) {
            setCurrentDay(dayAtual)
            tds[curretDay].classList.add('active')
          
        }

       
    })



    return (
        <tbody onClick={(e) => clickTarget(e)}>
            <tr>
                <td>{daysMonth[0]}</td>
                <td>{daysMonth[1]}</td>
                <td>{daysMonth[2]}</td>
                <td>{daysMonth[3]}</td>
                <td>{daysMonth[4]}</td>
                <td>{daysMonth[5]}</td>
                <td>{daysMonth[6]}</td>
            </tr>
            <tr>
                <td>{daysMonth[7]}</td>
                <td>{daysMonth[8]}</td>
                <td>{daysMonth[9]}</td>
                <td>{daysMonth[10]}</td>
                <td>{daysMonth[11]}</td>
                <td>{daysMonth[12]}</td>
                <td>{daysMonth[13]}</td>
            </tr>
            <tr>
                <td>{daysMonth[14]}</td>
                <td>{daysMonth[15]}</td>
                <td>{daysMonth[16]}</td>
                <td>{daysMonth[17]}</td>
                <td>{daysMonth[18]}</td>
                <td>{daysMonth[19]}</td>
                <td>{daysMonth[20]}</td>
            </tr>
            <tr>
                <td>{daysMonth[21]}</td>
                <td>{daysMonth[22]}</td>
                <td>{daysMonth[23]}</td>
                <td>{daysMonth[24]}</td>
                <td>{daysMonth[25]}</td>
                <td>{daysMonth[26]}</td>
                <td>{daysMonth[27]}</td>
            </tr>
            <tr>
                <td>{daysMonth[28]}</td>
                <td>{daysMonth[29]}</td>
                <td>{daysMonth[30]}</td>
            </tr>
        </tbody>
    )
}

export default Calender