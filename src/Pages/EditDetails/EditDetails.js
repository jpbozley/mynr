import './EditDetails.scss'

function EditDetails() {

    return (
        <div className="editDetails">
            <form className="editDetails__form">
                <div className="editDetails__container">
                    <label className="editDetails__label" htmlFor="Date">Date of last check:</label>
                    <input className="editDetails__item" name="Date" type="text" placeholder='Date of last check' />
                </div>
                <div className="editDetails__container">
                    <label className="editDetails__label" htmlFor="Reading">INR Reading:</label>
                    <input className="editDetails__item" name="Reading" type="text" placeholder='INR Reading' />
                </div>
                <div className="editDetails__container">
                    <label className="editDetails__label" htmlFor="Range">Target Range:</label>
                    <input className="editDetails__item" name="Range" type="text" placeholder='Target Range' />
                </div>
                <button className="editDetails__button">Submit</button>
            </form>
        </div>
    );
}

export default EditDetails;
