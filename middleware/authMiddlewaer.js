import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const authMiddlewaer = async(req,res,next) => {
    // console.log(req.headers.authorization);
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        
        try {
            // Eliminar Bearer
            const token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            // Buscar usuario y asignandole el valor a req.user
            req.user = await User.findById(decoded.id).select(
                "-password -verified -token -__v"
            )
            next()
            
        } catch {
            const error = new Error('Token no valido')
            res.status(403).json({msg: error.message})
        }
        
        
    }else{
        const error = new Error('Token no valido o inexistente')
        res.status(403).json({msg: error.message})
    }

    
    next()
}

export default authMiddlewaer