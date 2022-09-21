import './Medications.scss';
import axios from 'axios';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
function Medications({ medications, setMedications }) {

    const formRef = useRef();
    const navigate = useNavigate();
    const [medicineName, setMedicineName] = useState(null);
    const [medicineCUI, setMedicineCUI] = useState(null)
    const [interactionString, setInteractionString] = useState(null);

    useEffect(() => {
        axios.get(`https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${medicineName}`)
            .then(response => {
                setMedicineCUI(response.data.idGroup.rxnormId[0])
            })
    }, [medicineName])

    useEffect(() => {
        axios.get(`https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=11289+${medicineCUI}`)
            .then(response => setInteractionString(response.data.fullInteractionTypeGroup[0].fullInteractionType[0].interactionPair[0].description))
    }, [medicineCUI])


    const submitHandler = (event) => {
        event.preventDefault();
        setMedicineName(event.target.name.value)

    }

    const newMedHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/medications', {
            name: formRef.current.name.value,
            dose: formRef.current.dose.value
        })
        event.target.reset();
    }


    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8080/medications/${id}`)

    }


    if (medications === undefined) {
        return (<h1>loading...</h1>)
    }

    return (
        <div className="Medications">
            <h3>Your current medications:</h3>
            <ul className="Medications__current">
                {medications.data.map((medication) => {
                    return (
                        <li>{medication.name}: {medication.dose} <button onClick={() => deleteHandler(medication.id)}>Delete</button></li>

                    )
                })}
            </ul>
            <form ref={formRef} onSubmit={newMedHandler}>
                <input type="text" name="name" placeholder="Enter medication name" />
                <input type="text" name="dose" placeholder="Enter medication dose" />
                <button>Submit</button>
            </form>
            <div className="Medications__interactions-container">
                <h3>Check RX Interactions</h3>
                <h2 className='Medications__name'>{medicineName}</h2>
                <p className="Medications__interactions">{interactionString}</p>
                <form onSubmit={submitHandler}>
                    <input name="name" type="text" placeholder="Enter medication name" />
                    <button>Look up interaction</button>
                </form>
            </div>
        </div>
    );
}

export default Medications;
