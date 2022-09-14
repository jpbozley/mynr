import './Home.scss';
import { Link } from 'react-router-dom';
function Home() {


    return (
        <div className="Home">
            <div>
                <h2 className="Home__stats">Your last INR check was on: </h2>
                <h3></h3>
            </div>
            <div>
                <h2 className="Home__stats">Your last INR reading was: </h2>
                <h3></h3>
            </div>
            <div>
                <h2 className="Home__stats">Your target INR range is: </h2>
                <h3></h3>
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
