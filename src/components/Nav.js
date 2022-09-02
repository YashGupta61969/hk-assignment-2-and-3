import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

function Nav() {
    return (
        <nav>
            <h1>User App</h1>
            <ul className="links">
                <li><NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                    Home
                </NavLink></li>

                <li><NavLink
                    to="about"
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                    About
                </NavLink></li>

                <li><NavLink
                    to="help"
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                    Help
                </NavLink></li>

            </ul>
        </nav>
    )
}

export default Nav
