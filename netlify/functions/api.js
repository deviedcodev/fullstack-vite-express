import express from "express";
import serverless from "serverless-http";

const app = express();

app.use(express.json());

// CORS (penting)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Route contoh
app.get("/hello", (req, res) => {
  res.json({ message: "Hello dari Netlify Function! 🚀" });
});

// Tambahkan route lain kamu di sini nanti
// app.use('/users', userRouter);

export const handler = serverless(app);
