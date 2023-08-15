let express = require('express');
let app = express();


// 1 # Conoce la Console
console.log('Hello World')


// 2 # servidor expreso de trabajo
app.get('/', (req, res) => {
  res.send('Hello World')
})


app.listen(process.env.PORT ?? 8080, () => console.log('TODO BIEN:'+process.env.PORT))


































module.exports = app;
