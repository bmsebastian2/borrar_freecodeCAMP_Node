let express = require('express');
let app = express();
let path = require('path')
let PORT =8080
let pathFile = path.join(__dirname + '/views/index.html')

console.log(pathFile)
// 1 # Conoce la Console
console.log('Hello World')


// 2 # Servidor expreso de trabajo
// 3 # Servir un archivo HTML
// 4 # Servir activos estáticos
app.use(express.static(path.join(__dirname + '/public')))

app.get('/', (req, res) => {
  res.sendFile(pathFile)
})




app.listen(PORT, () => console.log('TODO BIEN:'+PORT))























module.exports = app;
