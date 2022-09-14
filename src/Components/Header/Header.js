import './Header.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { NavLink, Link } from "react-router-dom";

function Header() {

    return (
        <div className="Header">
            <h1 className="Header__title">MyNR</h1>
            <ul className="Header__list">
                <li>
                    <NavLink className="Header__link" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="Header__link" to="/Schedule">Schedule</NavLink></li>
                <li>
                    <NavLink className="Header__link" to="/Medications">Meds</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Header;
