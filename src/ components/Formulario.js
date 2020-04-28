import React, { Fragment } from 'react';

const Formulario = () => {
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
                /> 
            <label>Owner</label>
                <input
                    type="text"
                    name="Owner"
                    className="u-full-width"
                    placeholder="Owner Name"     
                /> 
                <label>Date</label>
                <input
                    type="date"
                    name="date"
                    className="u-full-width"
                    
                /> 
               <label>Time</label>
                <input
                    type="time"
                    name="time"
                    className="u-full-width"
                    
                /> 
                <label>Symptons</label>
                <textarea
                    name="symptons"
                    className="u-full-width"
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