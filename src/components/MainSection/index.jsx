import React, { useState } from 'react'

import './MainSection.css'
import { Outlet } from 'react-router-dom';

//icon
import { PiPlusFill } from "react-icons/pi";
import Modal from '../Modal';
import TaskForm from '../TaskForm';
import Menu from '../Menu';


const MainSection = () => {

    const [openModal, setOpenModal] = useState(false)


    return (
        <main className='main__container'>
            <Menu />
            <Outlet />

            <button className='btn-addTask'
                onClick={() => setOpenModal(!openModal)}
            >
                <PiPlusFill />
            </button>
            <button className='btn-addTask-desktop'
                onClick={() => setOpenModal(!openModal)}
            >
                <PiPlusFill size={40} />
                Adicionar tarefa
            </button>
            {openModal ?
                <Modal isOpen={openModal} setOpenModal={setOpenModal}>
                    <TaskForm />
                </Modal>
                : null}
        </main>
    )
}

export default MainSection