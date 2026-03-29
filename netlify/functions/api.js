import express from "express";
import serverless from "serverless-http";

// Import route-route kamu nanti di sini
// Contoh: import userRoutes from '../../server/routes/users.js';

const api = express();

api.use(express.json());

// Middleware CORS (penting untuk React frontend)
api.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

// Contoh route sederhana (sama seperti yang sudah kamu punya)
api.get("/hello", (req, res) => {
  res.json({ message: "Hello dari Netlify Function! 🚀" });
});

// Tambahkan route lain kamu di sini
// api.use('/users', userRoutes);

// Export sebagai serverless function
export const handler = serverless(api);
