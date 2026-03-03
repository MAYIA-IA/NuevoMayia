import { getModel } from '../config/gemini.js';

export async function generarRespuestaIA(mensaje, contexto, departamento) {
  try {
    const model = getModel();

    // Crear prompt contextual
    const prompt = crearPrompt(mensaje, contexto, departamento);

    // Generar respuesta
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const texto = response.text();

    console.log('🤖 Respuesta generada por Gemini');
    return texto;

  } catch (error) {
    console.error('Error generando respuesta IA:', error);
    throw new Error('No se pudo generar la respuesta de IA');
  }
}

function crearPrompt(mensaje, contexto, departamento) {
  let prompt = `Eres un asistente de IA empresarial especializado en ayudar con información de diferentes departamentos de una empresa.

Departamento actual: ${departamento || 'General'}

`;

  if (contexto && contexto.length > 0) {
    prompt += `Información relevante de la base de datos:\n${JSON.stringify(contexto, null, 2)}\n\n`;
  }

  prompt += `Pregunta del usuario: ${mensaje}

Instrucciones:
- Responde de manera clara, concisa y profesional
- Si hay datos de la base de datos, úsalos en tu respuesta
- Si no hay datos específicos, proporciona información general útil
- Mantén un tono amigable pero profesional
- Si la pregunta no está clara, pide más detalles

Respuesta:`;

  return prompt;
}
