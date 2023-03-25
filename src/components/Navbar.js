import React, {useState}from 'react'
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
// import DarkModeToggle from './DarkModeToggle';
// import { useState } from "react";

const Navbar = () => {

    console.log("hjhghdgfd")
    const [search, setSearch] = useState([]);
    
    const HandleOnChange=(e)=>{
        setSearch(e.target.value)
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        const res=await fetch(`https://newsapi.org/v2/everything?q=india&apiKey=e2ddef254b7149aba81dbb7a197f6144`) 
        console.log(res);
        console.log("Submitted")
    }


    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">New-Wrapper</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Water">water</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Science">Science</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/Technology" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Technology
                                </Link>
                                <ul className="dropdown-menu black-down">
                                    <li><Link className="dropdown-item" to="/Automation">Automation</Link></li>
                                    <li><Link className="dropdown-item" to="/Blockchain">Blockchain</Link></li>
                                    <li><Link className="dropdown-item" to='/Edge Computing'>Edge Computing</Link></li>
                                    <li><Link className="dropdown-item" to="/Artificial Intelligence">Artificial Intelligence</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/Sports" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sports
                                </Link>
                                <ul className="dropdown-menu black-down">
                                    <li><Link className="dropdown-item" to="/Cricket">Cricket</Link></li>
                                    <li><Link className="dropdown-item" to="/Football">Football</Link></li>
                                    <li><Link className="dropdown-item" to="/Hockey">Hockey</Link></li>
                                    <li><Link className="dropdown-item" to="/Table">Table Tenis</Link></li>
                                    <li><Link className="dropdown-item" to="/Chess">Chess</Link></li>
                                    <li><Link className="dropdown-item" to="/Carrom">Carrom</Link></li>
                                    <li><Link className="dropdown-item" to="/Snooker">Snooker</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={handleSubmit}>
                            <input className="form-control me-2" type="text" onChange = {HandleOnChange} placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type='submit'>Search</button>
                        </form>
                        {/* <DarkModeToggle /> */}
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Navbar
