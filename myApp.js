let express = require("express");
let app = express();
let path = require("path");
let PORT = 8080;
let pathFile = path.join(__dirname + "/views/index.html");
let pathStatic = path.join(__dirname + "/public");
// 7 # middleware nivel raiz
app.use((req, res, next) => {
  const { path, ip, method } = req;
  console.log(`${method} ${path} - ${ip}`);
  next();
});
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
    const now = new Date();
    req.time = now.getDay();
    next();
  },
  function (req, res) {
    console.log(req.time);

    res.send({ time: req.time });
  }
);

app.listen(PORT, () => console.log("TODO BIEN:" + PORT));

module.exports = app;
