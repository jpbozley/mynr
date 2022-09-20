import axios from 'axios';
import { useRef } from 'react';
import './EditDetails.scss'
import { useNavigate } from 'react-router-dom';

function EditDetails({ setCheckup }) {


    const formRef = useRef();
    const navigate = useNavigate();

    let detailsHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/checkups', {
            date: formRef.current.date.value,
            dateNext: formRef.current.dateNext.value,
            reading: formRef.current.reading.value,
            lowerRange: formRef.current.lowerRange.value,
            upperRange: formRef.current.upperRange.value,
        }
        )
            .then(response => setCheckup(response))
        navigate('/')

    }
    return (
        <div className="editDetails">
            <form className="editDetails__form" ref={formRef} onSubmit={detailsHandler}>
                <div className="editDetails__container">
                    <label className="editDetails__label" htmlFor="date">Date of last check:</label>
                    <input className="editDetails__item" name="date" type="text" placeholder='Date of last check' />
                </div>
                <div className="editDetails__container">
                    <label className="editDetails__label" htmlFor="dateNext">Date of next check:</label>
                    <input className="editDetails__item" name="dateNext" type="text" placeholder='Date of next check' />
                </div>
                <div className="editDetails__container">
                    <label className="editDetails__label" htmlFor="reading">INR Reading:</label>
                    <input className="editDetails__item" name="reading" type="text" placeholder='INR Reading' />
                </div>
                <div className="editDetails__container">
                    <label className="editDetails__label" htmlFor="lowerRange">Lower Range:</label>
                    <input className="editDetails__item" name="lowerRange" type="text" placeholder='Target Range' />
                </div>
                <div className="editDetails__container">
                    <label className="editDetails__label" htmlFor="upperRange">Upper Range:</label>
                    <input className="editDetails__item" name="upperRange" type="text" placeholder='Target Range' />
                </div>
                <button className="editDetails__button">Submit</button>
            </form>
        </div>
    );
}

export default EditDetails;
