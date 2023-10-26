const express = require ("express")
const cors = require ("corse")
const mongoose = require ("mongoose")

require("dotenv").config()

const app = express ()
const PORT = process.env.PORT || 5000

//Middleware
app.use(cors())
app.use(express,json())

try {
    
} catch (error) {
    
}