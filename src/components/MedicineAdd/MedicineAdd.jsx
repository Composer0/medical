import React, { useState } from 'react';
import './MedicineAdd.scss'

const MedicationAdd = () => {
    const [prescriptionName, setPrescriptionName] = useState('');
    const [dosage, setDosage] = useState('');
    const [medications, setMedications] = useState([]);

    const handleAddMedication = () => {
        if (prescriptionName.trim() === '' || dosage.trim() === '') {
            alert('Please enter both prescription name and dosage.');
            return;
        }

        const newMedication = {
            prescriptionName: prescriptionName,
            dosage: dosage
        };

        setMedications([...medications, newMedication]);
        setPrescriptionName('');
        setDosage('');
    };

    return (
        <div id="medicationAdd" className="medication-add-container">
            <h1>Add Medication</h1>
            <div className="prescription-wrapper">
                <div className="input-wrapper">
                    <label htmlFor="prescriptionName">Prescription Name:</label>
                    <input
                        type="text"
                        id="prescriptionName"
                        className="input-field"
                        value={prescriptionName}
                        onChange={(e) => setPrescriptionName(e.target.value)}
                        />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="dosage">Dosage:</label>
                    <input
                        type="text"
                        id="dosage"
                        className="input-field"
                        value={dosage}
                        onChange={(e) => setDosage(e.target.value)}
                        />
                </div>
            </div>
            <button className="add-medication-button" onClick={handleAddMedication}>Add</button>
            <div className="medications-list">
                <h2>Prescriptions:</h2>
                <div>
                    {medications.map((medication, index) => (
                        <div className='medicationRow' key={index}>
                            <div className='medicationNameList'>
                                {medication.prescriptionName}
                            </div>
                            <div className='medicationDosageList'>
                                {medication.dosage}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MedicationAdd;
