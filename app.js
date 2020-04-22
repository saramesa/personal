const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"));
app.get('/chatbot', function (req, res) {
    console.log('Request Type:', req.method);
    res.send('se ejecuta la rest de chatbot')
  });
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
