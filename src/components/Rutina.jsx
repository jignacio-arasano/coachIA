import React, { useState } from 'react';
import Form from './Form'; // Asegúrate de tener la ruta correcta al archivo Form
import { enviarDatosAChatGPT } from '../services/api'; // Asegúrate de tener la ruta correcta al archivo api

function Rutina() {
  const [respuestaAPI, setRespuestaAPI] = useState('');
  const [errorAPI, setErrorAPI] = useState('');

  const mostrarRespuesta = async (userData) => {
    try {
      // Llama a la función enviarDatosAChatGPT y espera la respuesta
      const response = await enviarDatosAChatGPT(userData);

      // Actualiza el estado con la respuesta y limpia cualquier mensaje de error
      setRespuestaAPI(response);
      setErrorAPI('');
    } catch (error) {
      // Si hay un error, muestra el mensaje de error y limpia la respuesta
      setErrorAPI('Error al obtener la respuesta de la API de ChatGPT');
      setRespuestaAPI('');
      console.error('Error al obtener la respuesta de la API de ChatGPT:', error);
    }
  };

  return (
    <div className="bg-blue-200 p-4">
      {/* Renderiza el componente Form y pasa la función mostrarRespuesta como una prop */}
      <Form mostrarRespuesta={mostrarRespuesta} />

      {/* Muestra la respuesta de la API o el mensaje de error */}
      {errorAPI ? (
        <div className="max-w-md mx-auto mt-4 p-6 bg-red-200 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Error</h2>
          <p>{errorAPI}</p>
        </div>
      ) : (
        <div className="max-w-md mx-auto mt-4 p-6 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Respuesta de la API</h2>
          <p>{respuestaAPI}</p>
        </div>
      )}
    </div>
  );
}

export default Rutina;
