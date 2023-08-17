let express = require("express");
let app = express();
let path = require("path");
let bodyParser = require("body-parser");
let PORT = 8080;
let pathFile = path.join(__dirname + "/views/index.html");
let pathStatic = path.join(__dirname + "/public");
// 7 # middleware nivel raiz
app.use((req, res, next) => {
  const { path, ip, method } = req;
  console.log(`${method} ${path} - ${ip}`);
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
// 1 # Conoce la Console
console.log("Hello World");

// 2 # Servidor expreso de trabajo
// 3 # Servir un archivo HTML
// 4 # Servir activos estáticos
app.use(express.static(pathStatic));

app.get("/", (req, res) => {
  res.sendFile(pathFile);
});

// 5 # Servir JSON
app.get("/json", (req, res) => {
  res.send({ message: "Hello json" });
});

// 8 # Midlleware servidor de tiempo
app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({ time: req.time });
  }
);

// 9 # Obtenga Parametros de ruta
app.get("/:word/echo", (req, res) => {
  let word = req.params.word;
  res.send({ echo: word });
});

// 10 # Parámetros de Query
let firstSet;
let lastSet;
app
  .route("/name")
  .get((req, res) => {
    const { first, last } = req.query;
    res.send({ name: `${first} ${last}` });
  })
  .post((req, res) => {
    const { first, last } = req.query;
    res.send({ name: `${first} ${last}` });
  });

// 11 # analizar solicitudes POST

app.listen(PORT, () => console.log("TODO BIEN:" + PORT));

module.exports = app;
