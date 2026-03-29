import express from "express";
import serverless from "serverless-http";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  next();
});

// Route contoh (tanpa prefix /api)
app.get("/hello", (req, res) => {
  res.json({ message: "Hello dari Netlify Function! ✅" });
});

// Tambahkan route lain di sini nanti, contoh:
// app.get('/users', async (req, res) => { ... });

export const handler = serverless(app);
