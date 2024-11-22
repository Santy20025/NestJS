import pkg from 'colors';
const {colors}=pkg;
import express from 'express'
import dotenv from 'dotenv'
import pruebaRouter from './routes/pruebeRoutes.js';
import authRouter from './routes/authRouter.js';
import connectDB from './config/db.js';


//leer del env.
dotenv.config()

connectDB()

//crear el objeto
//aplicacion de epresion
const app=express()

//configurar app para que acepte bodys en json
app.use(express.json())

const PORT = process.env.PORT

app.use('/api/pruebas',pruebaRouter)

app.use('/api/auth', authRouter)



//crear servidor epress
app.listen(PORT,()=>{
    console.log(`Servidor ejecutando en Puerto: ${PORT}`.bgGreen.red.bold)
})

dotenv.config