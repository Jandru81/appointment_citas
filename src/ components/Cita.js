import React from 'react';

const Cita= ({cita, eliminarCita}) => (
    <div className="cita">
        <p>Pet: <span>{cita.pet}</span></p>
        <p>Owner: <span>{cita.owner}</span></p>
        <p>Date: <span>{cita.date}</span></p>
        <p>Time: <span>{cita.time}</span></p>
        <p>Symptons: <span>{cita.symptons}</span></p>

        <button
        className="button eliminar u-full-width"
        onClick={ () => eliminarCita(cita.id) }

        >Eliminar &times;</button>
    </div>
);

export default Cita;