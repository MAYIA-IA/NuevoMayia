import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { initGeminiClient } from './config/gemini.js';
import chatRoutes from './routes/chatRoutes.js';
import departamentosRoutes from './routes/departamentosRoutes.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // permite herramientas sin origin (curl, Postman) y los orígenes en la lista
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error('Origen no permitido por CORS'));
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  })
);

app.use(express.json());

// Routes
app.use('/api/chat', chatRoutes);
app.use('/api/departamentos', departamentosRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Dashboard IA Backend running' });
});

// Inicializar Gemini al cargar el módulo (funciona en local y en serverless/Vercel)
if (process.env.GEMINI_API_KEY) {
  initGeminiClient();
} else {
  console.error('⚠️ GEMINI_API_KEY no está configurada');
}

// Servidor local: solo escucha cuando NO corre en Vercel (serverless)
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`\nServidor corriendo en http://localhost:${PORT}`);
    console.log(`API disponible en http://localhost:${PORT}/api`);
  });
}

export default app;
