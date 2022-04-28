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
    let {username,password,firstname,lastname,role} = req.body;
    poolconn.query('INSERT INTO users (username,password,firstname, lastname, role) VALUES ($1,$2,$3,$4,$5)', [username,password,firstname,lastname,role], (error,results) => {
        if(error){
            res.sendStatus(500);
            return;
        }
        return res.status(201).send(`User added with Username: ${username}`);
    })
});


app.get('/username/:user',(req,res)=>{

    const user_name =req.params.user;
    poolconn.query('SELECT * FROM users WHERE username=$1',[user_name],(error,results)=>{
        if(error){
            res.sendStatus(500);
            return;
        }
        return res.status(200).json(results.rows);
    })
});

app.get('/role/:roleInfo',(req,res)=>{
    const userRole = req.params.roleInfo;
    poolconn.query('SELECT * FROM role WHERE role=$1',[userRole],(error,results)=>{
        if(error){
            res.sendStatus(500);
            return;
        }
        return res.status(200).json(results.rows);
    })
});

app.get('/storeinventory',(req,res)=>{

    poolconn.query('SELECT * FROM inventory', (error,results)=>{
        if(error){
            res.sendStatus(500);
            return;
        }
        return res.status(200).json(results.rows);
    })

});

app.post('/shoporder/:username/:book',(req,res)=>{
    const book = req.params.book;
    const username = req.params.username;
    poolconn.query('INSERT INTO orders (username, orders) VALUES ($1,$2)', [username, book], (error,results) => {
        if(error){
            res.sendStatus(500);
            return;
        }
        return res.status(201).send(`Book Added to Order: ${book}`);
    })
});

app.get('/cart/:book',(req,res)=>{
    const book = req.params.book;
    poolconn.query('SELECT * FROM inventory WHERE book_name=$1',[book],(error,results)=>{
        if(error){
            res.sendStatus(500);
            return;
        }
            return res.status(200).json(results.rows);
        })
});

app.post('/checkout',(req,res)=>{
    let {username, order, date} = req.body;
    console.log(req.body);
    poolconn.query('INSERT INTO orders (username, orders, order_date) VALUES ($1,$2,$3)', [username, order, date], (error,results) => {
        if(error){
            res.sendStatus(500);
            return;
        }
        return res.status(201).send(`Order Placed!`);
    })
});

app.get('/profileorders/:username',(req,res)=>{
    const username = req.params.username;
    poolconn.query('SELECT * FROM orders WHERE username=$1',[username],(error,results)=>{
        if(error){
            res.sendStatus(500);
            return;
        }
        return res.status(200).json(results.rows);
    })

});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})