//express setup
const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 4567


//require routers
const authRouter = require('./routers/authRouter')
const bragRouter = require('./routers/brag')

//require middleware
const logger = require('morgan')
const passport = require('passport')
const bodyParser = require('body-parser')

//configure middleware
app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/auth', authRouter)
app.use(passport.initialize())
app.use('/brags', bragRouter)


app.get('/', async(req, res) =>{
    try{
        res.json({msg: "You're connected to Brag About It server."})
    }catch(err){
        console.log(err)
        response.status(e.status).json({ message: e.status })
    }
})

app.listen(PORT, () => console.log(`Brag About It listening on PORT ${PORT}`))