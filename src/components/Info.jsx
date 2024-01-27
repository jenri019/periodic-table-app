import React from 'react'
import { useSpeechSynthesis } from 'react-speech-kit';
import PropTypes from 'prop-types'

export const Info = ({selectedElement}) => {
    const { speak } = useSpeechSynthesis();

    const escucharInfo = () => {
        const information = `
        Nombre: ${selectedElement[2]},
        Numero atómico: ${selectedElement[0]}
        Familia: ${selectedElement[17]}
        `
        speak({ text: information })
    }
  
    return (
        <>
        {
            selectedElement.length == 0 ? <h1>Seleccione un elemento de la tabla periodica.</h1> : (
                <div>
                    <h1>Información del elemento {selectedElement[2]} ({selectedElement[0]})</h1>
                    <button onClick={() => escucharInfo()}>Escuchar</button>
                </div>
            )
        }
        </>
    )
}

Info.propTypes = {
    selectedElement: PropTypes.array.isRequired,
}