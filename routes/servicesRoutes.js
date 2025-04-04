import express from 'express'
import { createService, deleteService, getServiceById, getServicies, updateService } from '../controllers/servicesController.js'


const router = express.Router()

// router.post('/', createService)
// router.get('/', getServicies)
router.route('/')
    .post(createService)
    .get(getServicies)

// router.get('/:id', getServiceById)
// router.put('/:id', updateService)
// router.delete('/:id', deleteService)
router.route('/:id')
    .get(getServiceById)
    .put(updateService)
    .delete(deleteService)

export default router