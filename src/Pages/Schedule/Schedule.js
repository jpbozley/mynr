import './Schedule.scss';
import { Link } from 'react-router-dom';
function Schedule({ schedule }) {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayOfWeek = days[now.getDay()];
    if (schedule === undefined) {
        return (<h1>loading...</h1>)
    }

    return (
        < div className="Schedule" >
            <ul className="Schedule__list">
                <li className={`Schedule__list-item ${(dayOfWeek === 'Monday') ? "Schedule__list-item__active" : ""}`}>Monday: {schedule.data.Monday} mg </li>
                <li className={`Schedule__list-item ${(dayOfWeek === 'Tuesday') ? "Schedule__list-item__active" : ""}`}>Tuesday: {schedule.data.Tuesday} mg</li>
                <li className={`Schedule__list-item ${(dayOfWeek === "Wednesday") ? "Schedule__list-item__active" : ""}`}>Wednesday: {schedule.data.Wednesday} mg</li>
                <li className={`Schedule__list-item ${(dayOfWeek === "Thursday") ? "Schedule__list-item__active" : ""}`}>Thursday: {schedule.data.Thursday} mg</li>
                <li className={`Schedule__list-item ${(dayOfWeek === "Friday") ? "Schedule__list-item__active" : ""}`}>Friday: {schedule.data.Friday} mg</li>
                <li className={`Schedule__list-item ${(dayOfWeek === "Saturday") ? "Schedule__list-item__active" : ""}`}>Saturday: {schedule.data.Saturday} mg</li>
                <li className={`Schedule__list-item ${(dayOfWeek === "Sunday") ? "Schedule__list-item__active" : ""}`}>Sunday: {schedule.data.Sunday} mg</li>
            </ul>
            <button><Link className="Schedule__link" to="/schedule/edit">Edit Schedule</Link></button>

        </div >
    );
}

export default Schedule;
