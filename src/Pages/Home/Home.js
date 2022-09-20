import './Home.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
function Home({ checkup, schedule, taken, setTaken }) {

    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = days[now.getDay()];
    let clickHandler = () => {
        setTaken(!taken)
    }
    if (checkup === undefined) {
        return (<h1>loading...</h1>)
    }
    if (schedule === undefined) {
        return (<h1>loading...</h1>)
    }




    return (
        <div className="Home">
            <div className="Home__container">
                <h2 className="Home__stats">Your last INR check was on:</h2>
                <h3>{checkup.data.date}</h3>
            </div>
            <div className={`Home__container ${(checkup.data.lowerRange <= checkup.data.reading) && (checkup.data.reading <= checkup.data.upperRange) ? "Home__inRange" : "Home__outOfRange"}`}>
                <h2 className="Home__stats">Your last INR reading was:</h2>
                <h3>{checkup.data.reading} </h3>
            </div>
            <div className="Home__container">
                <h2 className="Home__stats">Your target INR range is:</h2>
                <h3> {checkup.data.lowerRange} - {checkup.data.upperRange} </h3>
            </div>
            <div className="Home__container">
                <h2 className="Home__stats">Today, you take:</h2>
                <h3>{taken === true ? `${schedule.data[dayOfWeek]} mg` : `TAKEN`}<button className="Home__taken-button" onClick={clickHandler}>{taken === false ? `UNDO` : 'TAKE'}</button>
                </h3>
            </div>
            <button className="Home__edit"><Link to="/edit" className="Home__link">Edit Details</Link></button>
        </div>
    );
}

export default Home;
