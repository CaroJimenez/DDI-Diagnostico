const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.json({ message: "Bienvenido" });
});

app.post("/validate", function (req, res) {
  const word = req.body.word;
  const regex = /^[a-zA-Z\s]+$/;

  if (regex.test(word)) {
    res.json({ message: "Word is valid" });
  } else {
    res.status(400).json({ error: "Word contains symbols" });
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
