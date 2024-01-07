import React from 'react'
import { useState } from 'react';
import { enviarDatosAChatGPT } from '../services/api'; // Asegúrate de tener la ruta correcta al archivo api.js

function Form() {
  const [trainingLevel, setTrainingLevel] = useState('');
  const [goal, setGoal] = useState('');
  const [availability, setAvailability] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Crea un objeto con los datos del formulario
    const userData = {
      trainingLevel,
      goal,
      availability,
    };
  
    try {
      // Llama a la función enviarDatosAChatGPT y espera la respuesta
      const response = await enviarDatosAChatGPT(userData);
  
      // Haz algo con la respuesta, por ejemplo, mostrarla en la consola
      
      console.log('Respuesta de la API de ChatGPT:', response);
    } catch (error) {
      console.error('Error al enviar datos a la API de ChatGPT:', error);
    }
  };
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Formulario de Entrenamiento</h2>
      <form onSubmit={handleSubmit}>
        {/* Nivel de entrenamiento */}
        <div className="mb-4">
          <label htmlFor="trainingLevel" className="block text-sm font-medium text-gray-600">
            Nivel de entrenamiento
          </label>
          <select
            id="trainingLevel"
            name="trainingLevel"
            value={trainingLevel}
            onChange={(e) => setTrainingLevel(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Selecciona un nivel</option>
            <option value="principiante">Principiante</option>
            <option value="intermedio">Intermedio</option>
            <option value="avanzado">Avanzado</option>
          </select>
        </div>

        {/* Objetivo */}
        <div className="mb-4">
          <label htmlFor="goal" className="block text-sm font-medium text-gray-600">
            Objetivo
          </label>
          <input
            type="text"
            id="goal"
            name="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        {/* Disponibilidad de días para entrenar */}
        <div className="mb-4">
          <label htmlFor="availability" className="block text-sm font-medium text-gray-600">
            Disponibilidad de días para entrenar
          </label>
          <input
            type="text"
            id="availability"
            name="availability"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        {/* Botón de enviar */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form;