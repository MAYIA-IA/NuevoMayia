import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

let db = null;
try {
  let serviceAccount;

  // 1. Intentar leer desde variable de entorno (Ideal para Vercel en producción)
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    // Si la cadena contiene saltos de línea crudos, los parseamos correctamente
    serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
  } else {
    // 2. Caer a archivo local (Ideal para desarrollo en local)
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const serviceAccountPath = join(__dirname, 'firebaseServiceAccount.json');
    serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'));
  }

  const app = initializeApp({
    credential: cert(serviceAccount)
  });
  db = getFirestore(app);
  console.log("🔥 Firebase Admin SDK inicializado correctamente (Firestore).");
} catch (error) {
  console.error("⚠️ Error al inicializar Firebase Admin SDK:", error);
}

export { db };
