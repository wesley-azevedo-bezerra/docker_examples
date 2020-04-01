let express = require('express')

let app = express()

app.get('/', (req, res) => { 
 
    res.send('funcionou!!!!')
})

const port = process.env.PORT || 8084

app.listen(port, () => {console.log("funcionou 1")})