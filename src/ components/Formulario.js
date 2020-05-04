import React, { Fragment, useState } from 'react';

const Formulario = () => {

    // Crear State de Citas
    const [cita, setcita] = useState({
        pet: '',
        owner:'',
        date:'',
        time:'',
        symptons:''

    })

    // Función que se ejecuta cada vez que el usuario escribe un input

    const handleChange = e => {
        setcita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    //Extraer los valores

    const {pet, owner, date, time, symptons } = cita;

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            
            <form>
                <label>Pet Name</label>
                <input
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Pet Name"
                    onChange={handleChange} 
                    value={pet}
                /> 
            <label>Owner</label>
                <input
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Owner Name"
                    onChange={handleChange} 
                    value={owner}     
                /> 
                <label>Date</label>
                <input
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={handleChange} 
                    value={date}
                /> 
               <label>Time</label>
                <input
                    type="time"
                    name="time"
                    className="u-full-width"
                    onChange={handleChange} 
                    value={time}
                /> 
                <label>Symptons</label>
                <textarea
                    name="symptons"
                    className="u-full-width"
                    onChange={handleChange} 
                    value={symptons}
                    ></textarea>
                    <button
                        type="submit"
                        className="u-full-width button-primary"
                    >Add Appointment</button>
                
            </form>

        </Fragment>
        
    );
}

export default Formulario;