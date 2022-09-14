import './Medications.scss';
import axios, { AxiosError } from 'axios';
import { useState, useEffect } from 'react';
function Medications() {


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


    // //gets interaction based on CUIs
    // axios.get(`https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=11289+220508`)
    //     .then(response => console.log(response.data.fullInteractionTypeGroup[0].fullInteractionType[0].interactionPair[0].description))



    //gets CUI based on medicine name
    // axios.get(`https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${medicineName}`)
    //     .then(response => {
    //         setMedicineCUI(response.data.idGroup.rxnormId[0])
    //     })

    const submitHandler = (event) => {
        event.preventDefault();
        setMedicineName(event.target.name.value)
    }

    return (
        <div className="Medications">
            <h2 className='Medications__name'>{medicineName}</h2>
            <p className="Medications__interactions">{interactionString}</p>
            <form onSubmit={submitHandler}>
                <input name="name" type="text" />
                <button>Add New Medication</button>
            </form>

        </div>
    );
}

export default Medications;
