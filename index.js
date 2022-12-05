const express = require('express')
const request = require('request');
const app = express()
const port = 3000

app.get('/coins', (req, res) => {
    request.get('https://api.coincap.io/v2/assets',(error, response, body)=>{
        res.send(body);
    })   
});
app.get('/rates', (req, res) => {
    request.get('https://api.coincap.io/v2/rates',(error, response, body)=>{
        res.send(body);
    })   
});
app.get('/markets', (req, res) => {
    request.get('https://api.coincap.io/v2/markets',(error, response, body)=>{
        res.send(body);
    })   
});
app.get('/exchanges', (req, res) => {
    request.get('https://api.coincap.io/v2/exchanges',(error, response, body)=>{
        res.send(body);
    })   
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})