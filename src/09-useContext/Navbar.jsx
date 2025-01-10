import React from 'react'
import { Link, NavLink } from 'react-router'

export const Navbar = () => {
  return (
    // <>
    // <Link to="/">Home</Link>
    // <Link to="/about">About</Link>
    // <Link to="/login">Login</Link>
    // </>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          UseContext
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
              to="/"
            >
              HOME
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
              to="/about"
            >
              ABOUT
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
              to="/login"
            >
              LOGIN
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}
