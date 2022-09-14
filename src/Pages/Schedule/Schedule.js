import './Schedule.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
function Schedule() {


    return (
        <div className="Schedule">
            <ul className="Schedule__list">
                <li className="Schedule__list-item">Monday </li>
                <li className="Schedule__list-item">Tuesday </li>
                <li className="Schedule__list-item">Wednesday </li>
                <li className="Schedule__list-item">Thursday </li>
                <li className="Schedule__list-item">Friday </li>
                <li className="Schedule__list-item">Saturday </li>
                <li className="Schedule__list-item">Sunday </li>
            </ul>
            <button>Edit Schedule</button>

        </div>
    );
}

export default Schedule;
