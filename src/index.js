// const express = require('express');
import { dir } from 'console'
import express from 'express'
// import ejs from 'ejs'
import {dirname, join} from 'path'
import { fileURLToPath } from 'url'

import indexRoutes from './routes/index.js'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))
// console.log('el dirname:')
// console.log(join(__dirname,'views'))

app.set('port', process.env.PORT || 4500);
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(indexRoutes)

app.use(express.static(join(__dirname, 'public')))



app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
    console.log('Server domain: ', process.env.SERVER_DOMAIN )
});