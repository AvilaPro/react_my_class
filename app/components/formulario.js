"use client"

import { useState } from "react";

export function Formulario() {
    const [persona, setPersona] = useState({
        nombre : "",
        telefono: '',
        direccion: {
            ciudad: 'Barquisimeto',
            calle: '',
            municipio: 'Iribarren',
            parroquia: 'Catedral'
        }
    });

    function cambiadorNombre(e) {
        console.log(e);
        setPersona({
            ...persona,
            nombre : e.target.value
        })
    }

    function cambiadorCalle(e) {
        setPersona({
            ...persona,
            direccion: {
                ...persona.direccion,
                calle: e.target.value
            }
        })
    }

    return(
        <>
            <h2>Simulacion de cambio de estado de objeto</h2>
            <label>Nombre:</label>
            <input value={persona.nombre} onChange={cambiadorNombre}/><br></br>
            <label>Calle:</label>
            <input value={persona.direccion.calle} onChange={cambiadorCalle}/>
            <hr />
            <p>Los datos de la persona son: <span>{persona.nombre}</span></p>
            <p>La calle donde vive es: <span>{persona.direccion.calle}</span></p>
        </>
    )
}