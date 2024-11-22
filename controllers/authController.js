
import mongoose from "mongoose"
import User from "../entities/user.entity.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const userRegister = async (req, res) => {
    //Desestructurar el body
    const { firstName, 
            lastName, 
            email, 
            password, 
            isAdmin
         } = req.body
    //Verificar si el usuario existe
    const vUSer = await User.findOne({email: req.body.email})
    if (vUSer) {
        res.status(400).json({message: "El usuario ya existe"})
    } else {
        //encriptar password
        const sal = await bcrypt.genSalt(10)
        const bcPassword = await bcrypt.hash(password, sal)

        //Crear el nuevo usuario:
    const newUser = await User.create({
        firstName,
        lastName,
        email,
        password : bcPassword,
        isAdmin}
    )
    res.status(201).json(newUser)
    }
    
}  


export const userLogin = async (req, res) => {
    const { email, password } = req.body

    //Encontrar al usuario por email
    const user= await User.findOne({email})
    if(user){ 
        //si el usuario existe, cmparar los
        //hash(request, mongo)
        if( await bcrypt.compare(password, user.password)){
            res.status(200).json({id: user._id,
                                name: user.firstName,
                                token: generarToken(user._id)
            })
        }else{
            res.status(404).json({
                "message": "Credenciales invalidas"
            })
        }
    }else{
        res.status(404).json({
            "message": "Credenciales invalidas"
        })
    }
    

    res.json(user)
    
}


//funcion que retorne el token
const generarToken = (id) => {
    return jwt.sign({id},
                    process.env.JWT_SECRET,
                    {
                        expiresIn: '30d'
                    })
}