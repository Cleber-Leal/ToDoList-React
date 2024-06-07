import React, { useEffect, useRef } from 'react'
import './Modal.css'

const Modal = ({ isOpen, children, setOpenModal }) => {

    const checkClick = (e) => {
        if (isOpen && !refOne.current.contains(e.target)) {
            setOpenModal(false)
            document.removeEventListener('mousedown', checkClick)
        }
    }

    let refOne = useRef()

    useEffect(() => {
        document.addEventListener('mousedown', checkClick)
    }, [])


    if (isOpen) {
        return (
            <div className='container__modal'  >

                <div className='container__modal-content' ref={refOne}>
                    <h1>Adicione uma nova tarefa!</h1>
                    {children}
                </div>
            </div>
        )
    }
    return null;
}

export default Modal