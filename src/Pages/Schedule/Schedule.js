import './Schedule.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
function Schedule() {

    // const [schedule, setSchedule] = useState()


    // useEffect(() => {
    //     axios.get(`http://localhost:8080/schedule`)
    //         .then(response => {
    //             setSchedule(response)
    //         })
    // }, [schedule])


    return (
        <div className="Schedule">
            <ul className="Schedule__list">
                <li className="Schedule__list-item">Monday: </li>
                <li className="Schedule__list-item">Tuesday: </li>
                <li className="Schedule__list-item">Wednesday: </li>
                <li className="Schedule__list-item">Thursday: </li>
                <li className="Schedule__list-item">Friday: </li>
                <li className="Schedule__list-item">Saturday: </li>
                <li className="Schedule__list-item">Sunday: </li>
            </ul>
            <button><Link className="Schedule__link" to="/schedule/edit">Edit Schedule</Link></button>

        </div>
    );
}

export default Schedule;
