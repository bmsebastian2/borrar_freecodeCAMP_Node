let express = require('express');
let app = express();
let path = require('node:path')
let PORT =8080
let pathFile = path.join(__dirname + '/views/index.html')

console.log(pathFile)
// 1 # Conoce la Console
console.log('Hello World')


// 2 # servidor expreso de trabajo
// 3 # Servir un archivo HTML
app.get('/', (req, res) => {
  res.sendFile(pathFile)
})




app.listen(PORT, () => console.log('TODO BIEN:'+PORT))























module.exports = app;
