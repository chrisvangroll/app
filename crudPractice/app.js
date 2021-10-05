const express = require('express');
const mongoose = require('mongoose');
const uri = 'mongodb+srv://chris:xw5Lftse7cdfQ8P@cluster0.ddekq.mongodb.net/practice?retryWrites=true&w=majority'

const app = express()

const con = mongoose.connection;

mongoose.connect(uri, { useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex:true })


con.on('open', function(){
    console.log('connected')
})