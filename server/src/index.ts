import express from "express";

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "companywiki", time: new Date().toISOString() });
});

app.get("/", (_req, res) => {
  res.send("CompanyWiki Server läuft 🚀");
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
