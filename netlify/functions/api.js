import express from "express";
import serverless from "serverless-http";

const app = express();

app.use(express.json());

// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  next();
});

// Route contoh (support path /hello dan /api/hello)
app.get("/hello", (req, res) => {
  res.json({
    message: "Hello dari Netlify Function! ✅",
    success: true,
  });
});

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello dari Netlify Function (API path)! ✅",
    success: true,
  });
});

export const handler = serverless(app);
