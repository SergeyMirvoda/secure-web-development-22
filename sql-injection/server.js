const express = require('express');
const app = express();
const port = 8080;
const { Client } = require('pg');
const qs = require('querystring');


app.use(express.static('static'));
app.use(express.json());
app.use(express.text({type:'application/x-www-form-urlencoded'}));

const client = new Client({
    user: 'postgres',
    host: '192.168.121.137',
    database: 'lib',
    password: 'P@ssw0rd',
    port: 5432,
});
client.connect();





app.get('/', (req, res) => {
  res.send('Лабораторная №3 обойти "защиту"! <br/> 1: <a href="/login.html">login</a>')
})

app.post('/signin', async (req, res) => {

    let login = decodeURI(qs.decode(req.body).name);

    let pass = decodeURI(qs.decode(req.body).pass);
    
    var query = require('url').parse(req.body,true).query;
    let sql = "SELECT name as result FROM users WHERE name = '" + login + "' AND pass = '" + pass + "'";

    try{
        
        let data = await client.query(sql);
        if(data.rows.length>0 && data.rows[0].result){
            res.send(`success ${data.rows[0].result}`);
        }else
        {
            res.send(`fail ${login}`);
        }
    }
    catch(e)
    {
        console.log(e);
        res.send(`error ${e.message}. <br/> SQL:${sql}`);
    }

  })


app.listen(port, ()=>{
	console.log(`server running at http://localhost:${port}`);
})
