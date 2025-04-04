import express from 'express'
import { register, verifyAccount, login, user } from '../controllers/authController.js'
import authMiddlewaer from '../middleware/authMiddlewaer.js'

const router = express.Router()

// Rutas de autentificacion y registro de usuarios

router.post('/register', register)
router.get('/verify/:token', verifyAccount)
router.post('/login', login)

// Area Privada - Requiere un JWT
router.get('/user', authMiddlewaer, user)

export default router