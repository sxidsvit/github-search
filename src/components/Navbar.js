import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg d-flex flex-row justify-content-between">
      <div className="navbar-brand">
        Github Search
      </div>
      <ul className="navbar-nav d-flex flex-row justify-content-between">
        <li className="nav-item mr-5">
          <NavLink to="/" className="nav-link" exact>Главная</NavLink>
        </li>
        <li>
          <NavLink to="/info" className="nav-link">Информация</NavLink>
        </li>
      </ul>
    </nav>
  )
}
