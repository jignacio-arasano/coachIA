

import OpenAI from "openai";

const openai = new OpenAI({ apiKey: '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', dangerouslyAllowBrowser: true })

export async function enviarDatosAChatGPT(userData) {
  // Crear un prompt formado por el objeto userData
  //const prompt = `Training Level: ${userData.trainingLevel}\nGoal: ${userData.Goal}\nAvailability: ${userData.availability}\n`;

  // Enviar la solicitud a OpenAI
  /*const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful coach assistant and i'll give you three characteristics of myself firstly my training level, second my goals and third how many days i can workout a week, you will provide me a personalized routine." }, { role: "user", content: prompt }],
    model: "gpt-3.5-turbo",
  });*/

  // Obtener la respuesta
  const respuesta = "hola";//completion.choices[0].message.content;

  // Exportar la respuesta para que la utilice otro componente
  return respuesta;
}

export default enviarDatosAChatGPT;
