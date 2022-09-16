import './Home.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
function Home() {


    const [checkup, setCheckup] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8080/checkups`)
            .then(response => {
                console.log(response)
                setCheckup(response)
            })
    }, [])

    if (checkup === undefined) {
        return (<h1>loading...</h1>)
    }
    return (
        <div className="Home">
            <div>
                <h2 className="Home__stats">Your last INR check was on:</h2>
                <h3>{checkup.data.date}</h3>
            </div>
            <div>
                <h2 className="Home__stats">Your last INR reading was:</h2>
                <h3>{checkup.data.reading} </h3>
            </div>
            <div>
                <h2 className="Home__stats">Your target INR range is:</h2>
                <h3> {checkup.data.lowerRange} - {checkup.data.upperRange} </h3>
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
