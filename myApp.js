let express = require('express');
let app = express();
let PORT =8080

// 1 # Conoce la Console
console.log('Hello World')


// 2 # servidor expreso de trabajo
app.get('/', (req, res) => {
  res.send('Hello World')
})


app.listen(PORT, () => console.log('TODO BIEN:'+PORT))


































module.exports = app;
