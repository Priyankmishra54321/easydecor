const express = require('express');
const path= require('path');
const router =express.Router();

module.exports = ()=>{
    router.get('/',(req,res)=>{
        res.sendFile(path.join(__dirname,'../DESIGN!!/commercial.html'));
    });

    return router;
};


