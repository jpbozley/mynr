import './EditSchedule.scss'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function EditSchedule() {
    const formRef = useRef();
    const navigate = useNavigate();

    let scheduleHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/schedule', {
            Monday: formRef.current.Monday.value,
            Tuesday: formRef.current.Tuesday.value,
            Wednesday: formRef.current.Wednesday.value,
            Thursday: formRef.current.Thursday.value,
            Friday: formRef.current.Friday.value,
            Saturday: formRef.current.Saturday.value,
            Sunday: formRef.current.Sunday.value,

        }
        )
        navigate('/schedule')
    }


    return (
        <div className="editSchedule">
            <form className="editSchedule__form" ref={formRef} onSubmit={scheduleHandler}>
                <div className="editSchedule__container">
                    <label htmlFor="Monday">Monday:</label>
                    <input type="text" name="Monday" />
                </div>
                <div className="editSchedule__container">
                    <label htmlFor="Monday">Tuesday:</label>
                    <input type="text" name="Tuesday" />
                </div>
                <div className="editSchedule__container">
                    <label htmlFor="Monday">Wednesday:</label>
                    <input type="text" name="Wednesday" />
                </div>
                <div className="editSchedule__container">
                    <label htmlFor="Monday">Thursday:</label>
                    <input type="text" name="Thursday" />
                </div>
                <div className="editSchedule__container">
                    <label htmlFor="Monday">Friday:</label>
                    <input type="text" name="Friday" />
                </div>
                <div className="editSchedule__container">
                    <label htmlFor="Monday">Saturday:</label>
                    <input type="text" name="Saturday" />
                </div>
                <div className="editSchedule__container">
                    <label htmlFor="Monday">Sunday:</label>
                    <input type="text" name="Sunday" />
                </div>
                <button className="editSchedule__button">Submit</button>
            </form>
        </div>
    );
}

export default EditSchedule;
