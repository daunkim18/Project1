const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const poolconn = require('./databaseconnection');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}));

//http://localhost:3001/registeruser
app.post('/registeruser',(req,res)=>{
    let {username,password,role} = req.body;
    poolconn.query('INSERT INTO users (username,password,role) VALUES ($1,$2,$3)', [username,password,role], (error,results) => {
        if(error){
            throw error;
        }
        res.status(201).send(`User added with Username: ${username}`);
    })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})