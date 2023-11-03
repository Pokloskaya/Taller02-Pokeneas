const express = require('express')

const app = express()
const router = require("pokeneas\src\routes\index.js");
const PORT = 3000


app.use(express.json());
app.use("/",router);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//export const index = (req, res) => res.send('Hello World!');

/*app.get('/', (req, res) => {

res.send('Proyect!')

})

app.listen(port, () => {

console.log(`Example app listening on port ${port}`)

})*/