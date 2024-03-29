const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.json({
        name: "sunaina"
    })
})


app.post('/api/publish', (req, res) => {
    const { student } = req.body || {};
    res.json({
        data: student
    })
})

app.put('/api/publish/new', (req, res) => {
    const { student } = req.body || {};
    const newStudent = {...student,surname: "Srivastava"}
    res.json({
        data: newStudent
    });
});

app.delete('/api/publish/new', (req, res) => {
    const { student: {name, living} } = req.body || {};
    const newStudent = {name, living, surname: "Srivastava"}
    res.json({
        data: newStudent
    });
});


app.listen(port, () => {
    console.log(`Social app listening on port ${port}`)
})