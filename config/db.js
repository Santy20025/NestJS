import mongoose from "mongoose";
import colors from 'colors'

const connectDB = async () =>{
    try {
        const conn  = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Conexion exitosa a mongo: ${conn.connection.host}`.bgCyan.gray.bold)
    } catch (error) {
        console.log(`Error al conectar a mogo: ${error}`)
        process.exit(1)
    }
}

export default connectDB