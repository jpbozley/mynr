import './Schedule.scss';
import { Link } from 'react-router-dom';
function Schedule({ schedule }) {

    if (schedule === undefined) {
        return (<h1>loading...</h1>)
    }

    return (
        < div className="Schedule" >
            <ul className="Schedule__list">
                <li className="Schedule__list-item">Monday: {schedule.data.Monday} mg </li>
                <li className="Schedule__list-item">Tuesday: {schedule.data.Tuesday} mg</li>
                <li className="Schedule__list-item">Wednesday: {schedule.data.Wednesday} mg</li>
                <li className="Schedule__list-item">Thursday: {schedule.data.Thursday} mg</li>
                <li className="Schedule__list-item">Friday: {schedule.data.Friday} mg</li>
                <li className="Schedule__list-item">Saturday: {schedule.data.Saturday} mg</li>
                <li className="Schedule__list-item">Sunday: {schedule.data.Sunday} mg</li>
            </ul>
            <button><Link className="Schedule__link" to="/schedule/edit">Edit Schedule</Link></button>

        </div >
    );
}

export default Schedule;
