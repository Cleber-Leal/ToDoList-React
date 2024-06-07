import React, { useContext, useState } from 'react'
import './Menu.css'

//icons
import { MdOutlineWork } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { MdShoppingBag } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { TasksContext } from '../../context/TasksContext';

const Menu = () => {
    const [active, setActive] = useState(false);

    const {date} = useContext(TasksContext);
    
    const handlerMenu = () => {
        setActive(!active)
    }

    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Otubro", "Novembro", "Dezembro"];
    const dias = ['Domingo','Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']

    

    return (
        <nav>
            <div className='menu'>
                <div>
                    <p>{dias[date.getDay()] + ' ' + date.getDate() + ' ' + months[date.getMonth()]}</p>
                    <h2>ToDo List</h2>
                </div>
                <ul className={active ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <NavLink to="/"
                            className={({ isActive }) => {
                                return  isActive ? 'menu-link active' : 'menu-link'
                            }}>
                            <MdOutlineWork size={30} />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/pessoal"
                            className={({ isActive }) => {
                                return isActive ? 'menu-link active' : 'menu-link'
                            }}>
                            <MdPerson size={30} />
                            Pessoal
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/compras"
                            className={({ isActive }) => {
                                return isActive ? 'menu-link active' : 'menu-link'
                            }}>
                            <MdShoppingBag size={30} />
                            Compras
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/saude"
                            className={({ isActive }) => {
                                return isActive ? 'menu-link active' : 'menu-link'
                            }}>
                            <MdHealthAndSafety size={30} />
                            Saúde
                        </NavLink>
                    </li>
                </ul>

                <ul className='nav-menu-desktop'>

                    <li>
                        <NavLink to="/"
                            className={({ isActive }) => {
                                return isActive ? 'menu-link active' : 'menu-link'
                            }}>
                            <MdOutlineWork size={30} />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/pessoal"
                            className={({ isActive }) => {
                                return isActive ? 'menu-link active' : 'menu-link'
                            }}>
                            <MdPerson size={30} />
                            Pessoal
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/compras"
                            className={({ isActive }) => {
                                return isActive ? 'menu-link active' : 'menu-link'
                            }}>
                            <MdShoppingBag size={30} />
                            Compras
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/saude"
                            className={({ isActive }) => {
                                return isActive ? 'menu-link active' : 'menu-link'
                            }}>
                            <MdHealthAndSafety size={30} />
                            Saúde
                        </NavLink>
                    </li>
                </ul>

                <div className='btn-mobile' onClick={handlerMenu}>{active ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-ellipsis"></i>}</div>
            </div>
        </nav>
    )
}

export default Menu