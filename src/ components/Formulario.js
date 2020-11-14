import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4';

const Formulario = ({crearCita}) => {

    //Crear State de Citas
    const [cita, setCita] = useState({
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptons: ''
    });
    // state de error
    const [ error,setError] = useState(false)

    // Función que se ejecuta cada vez que el usuario escribe un input
    const handleChange = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value

        });
    }

    // Extraer los valores
    const { pet, owner, date, time, symptons} = cita;

    // Cuando el usario presiona agregar cita
    const submitCita = e => {
        e.preventDefault();

        // Validar
        if(pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || symptons.trim() === ''){
            setError(true);
            return;
        }
        //Eliminar el mensaje previo
        setError(false);

        //Asignar un ID
        cita.id = uuid();

        //Crear la cita
        crearCita(cita);

    
        //Reiniciar el form
        setCita({
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptons: ''

        })
    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }
            
            <form
                onSubmit={submitCita}
            >
                
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