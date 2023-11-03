const express = require('express')
const app = express()
const router = require("./pokeneas/src/routes/index.js"); 
const PORT = 3000
const expressEjsLayout = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views', './pokeneas/public/Views');
app.use(expressEjsLayout);
app.set('layout', './layout/layout.ejs');

app.use(express.json());
app.use("/",router);
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})

//export const index = (req, res) => res.send('Hello World!');

/*app.get('/', (req, res) => {

res.send('Proyect!')

})

app.listen(port, () => {

console.log(`Example app listening on port ${port}`)

})*/