import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'

export default function Navbar(){
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Portofolio Codingstudio</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to="/">Home</NavLink></li>
              <li className="nav-item"><NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to="/about">About</NavLink></li>
              <li className="nav-item"><NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to="/projects">Projects</NavLink></li>
              <li className="nav-item"><NavLink className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'} to="/contact">Contact</NavLink></li>
            </ul>
            <div className="ms-3">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}