const express = require('express')

const app = express()

const port = 3000

export const index = (req, res) => res.send('Hello World!');

/*app.get('/', (req, res) => {

res.send('Proyect!')

})

app.listen(port, () => {

console.log(`Example app listening on port ${port}`)

})*/