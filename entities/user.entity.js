import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    firstName:{
        type: String,
        require: [true, "Nombre requerido"]
    },
    lastName:{
        type: String,
        require: [true, "Apellido requerido"]
    },
    email: {
        type: String,   
        require: [true, "Nombre de usuario requerido"],
        unique:[true, "Username No debe ser repetido"]
    },
    password:{
        type: String,
        require: [true, "Contraseña requerida"]
    },
    idAdmin: {
        type: Boolean,
        require: [true, "isAdmin es requerido"],
        default: false
    }
},
{
    timestamps: true
})

const User = mongoose.model( "User", UserSchema)

export default User