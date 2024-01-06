

const API_URL = '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';

const enviarDatosAChatGPT = async (userData) => {
  // Lógica para enviar datos a la API de ChatGPT utilizando fetch
  const response = await fetch(`${API_URL}/generar-rutina`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  // Lógica para construir el prompt para la API de OpenAI GPT-3.5 Turbo
  const prompt = `Usuario: ${userData.usuario}\nObjetivo: ${userData.objetivo}\nDias que puede entrenar: ${userData.preferencias}\nAsistente:`;

  // Lógica para enviar datos a la API de OpenAI GPT-3.5 Turbo utilizando openai
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: prompt }, // Agrega el prompt construido
    ],
    model: "gpt-3.5-turbo-instruct",
  });

  console.log(data); // Puedes hacer algo con los datos de la primera API
  console.log(completion.choices[0].message.content); // Puedes hacer algo con la respuesta de GPT-3.5 Turbo

  return { primeraAPI: data, gptRespuesta: completion.choices[0].message.content };
};

export { enviarDatosAChatGPT };
