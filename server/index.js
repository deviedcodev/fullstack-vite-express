import express from "express";
import ViteExpress from "vite-express";
const app = express();

// Middleware biasa
app.use(express.json());

// Contoh API route sederhana
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello dari Express + Vite! 🚀" });
});

// Mount semua API routes kamu di sini nanti
// app.use('/api/users', userRoutes)

// Ini yang penting: vite-express akan handle frontend dev server + serve build di production
ViteExpress.listen(app, 3000, () => {
  console.log("Server berjalan di http://localhost:3000");
});
