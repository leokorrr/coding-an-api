const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('static'));
app.use(bodyParser.json());

userData = [];

app.get('/api/user', (req, res)=>{
    res.json({userData: userData});
})

app.post('/api/user', (req, res)=>{
    const newUserData = req.body;

    userData.push(newUserData);
    res.json(newUserData);    
})

app.listen(4000, ()=>{
    console.log('App started on port 4000'); 
})