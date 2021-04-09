import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../styles/Header.module.css'

const Header = () => {
   return (
      <header className={style.header}>
         <ul>
            <li>
               <NavLink 
                  activeClassName={style.active} 
                  className={style.link} 
                  to="/" end
               > 
                  Produtos
               </NavLink>
            </li>
            <li>
               <NavLink 
                     activeClassName={style.active} 
                     className={style.link} 
                     to="/contact"
                  >
                  Contato
               </NavLink>
            </li>
         </ul>
      </header>
   )
}

export default Header
