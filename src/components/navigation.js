import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () =>(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/add">Add</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/list">List</NavLink>
            </li>
        </ul>
    </nav>
)

export default Navigation