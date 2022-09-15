import './Home.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
function Home() {


    const [checkupDate, setCheckupDate] = useState(null);
    const [reading, setReading] = useState(null);
    const [lowerRange, setLowerRange] = useState(null);
    const [upperRange, setUpperRange] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/checkups`)
            .then(response => {
                setCheckupDate(response.data[0].date)
            })
    }, [checkupDate])

    useEffect(() => {
        axios.get(`http://localhost:8080/checkups`)
            .then(response => {
                setReading(response.data[0].reading)
            })
    }, [reading])

    useEffect(() => {
        axios.get(`http://localhost:8080/checkups`)
            .then(response => {
                setLowerRange(response.data[0].lowerRange)
            })
    }, [lowerRange])

    useEffect(() => {
        axios.get(`http://localhost:8080/checkups`)
            .then(response => {
                setUpperRange(response.data[0].upperRange)
            })
    }, [upperRange])

    return (
        <div className="Home">
            <div>
                <h2 className="Home__stats">Your last INR check was on:</h2>
                <h3>{checkupDate}</h3>
            </div>
            <div>
                <h2 className="Home__stats">Your last INR reading was:</h2>
                <h3>{reading} </h3>
            </div>
            <div>
                <h2 className="Home__stats">Your target INR range is:</h2>
                <h3> {lowerRange} - {upperRange} </h3>
            </div>
            <div>
                <h2 className="Home__stats">Today, you take: </h2>
                <h3></h3>
            </div>
            <button><Link to="/edit" className="Home__link">Edit Details</Link></button>
        </div>
    );
}

export default Home;
