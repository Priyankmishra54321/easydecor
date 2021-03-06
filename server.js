const express = require('express');
const path = require('path');
const mysqlConnection=require('./sqldata/connection');

const routes = require('./routes')

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,'./')))
app.use(express.static(path.join(__dirname,'./DESIGN!!')))

app.use('/',routes());

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/`);
});
