import './EditSchedule.scss'

function EditSchedule() {

    return (
        <div className="editSchedule">
            <form className="editSchedule__form">
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
