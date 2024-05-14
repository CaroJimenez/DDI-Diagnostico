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
  const split_string = word.split("");
  const lowerCaseArray = split_string.map((item) => item.toLowerCase());

  const code = [];

  for (var i = 0; i < split_string.length; i++) {
    const char = lowerCaseArray[i];
    if (char === " " || char === "") {
      code.push([" ", "no url"]);
    } else {
      code.push([
        char,
        `https://img.icons8.com/ios/50/sign-language-${split_string[
          i
        ].toLowerCase()}.png`,
      ]);
    }
  }

  if (regex.test(word)) {
    res.json({ message: "Word is valid", code });
  } else {
    res.status(400).json({ error: "Word contains symbols" });
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
