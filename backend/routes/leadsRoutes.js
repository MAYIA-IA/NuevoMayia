import express from 'express';
import { db } from '../config/firebase.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { nombre, correo, telefono, origen } = req.body;
  
  if (!nombre || !correo || !telefono) {
    return res.status(400).json({ error: 'Nombre, correo y teléfono son campos obligatorios.' });
  }

  try {
    if (!db) {
      throw new Error('Base de datos Firestore no inicializada.');
    }

    const leadData = {
      nombre: nombre.trim(),
      correo: correo.trim(),
      telefono: telefono.trim(),
      origen: origen || 'Contacto',
      timestamp: new Date()
    };

    const docRef = await db.collection('leads').add(leadData);
    
    return res.status(201).json({ 
      id: docRef.id, 
      message: 'Lead guardado con éxito en Firestore.' 
    });
  } catch (error) {
    console.error('Error al guardar lead en Firestore:', error);
    return res.status(500).json({ 
      error: 'Error interno del servidor al procesar la solicitud.',
      details: error.message 
    });
  }
});

export default router;
