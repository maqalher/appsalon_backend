import Services from '../models/Servicies.js'
import { handleNotFoundError, validateObjectId } from '../utils/index.js'

const createService = async(req, res) => {
    // console.log(req.body);
    if(Object.values(req.body).includes('')){
        const error = new Error('Todos los campos son obligatorios')

        return res.status(400).json({
            msg: error.message
        })
    }

    try {
        const service = new Services(req.body)
        // console.log(service);

        // const result = await service.save()
        // res.json(result)

        await service.save()

        res.json({
            msg: 'El Servicio se creo correctamente'
        })
        
    } catch (error) {
        console.log(error);
    }
    
}

const getServicies = async (req, res) => {
    // res.send('hola')
    try {
        const services = await Services.find()
        res.json(services)
    } catch (error) {
        console.log(error);
    }
}

const getServiceById = async(req, res) => {
    // console.log(req.params.id);
    const { id } = req.params
    // Validar un object id
    if(validateObjectId(id, res)) return

    // Validar que exista
    const service = await Services.findById(id)
    if(!service){
        return handleNotFoundError('El Servicio no existe', res)
    } 

    // Mostrar el servicio
    res.json(service)
}

const updateService = async(req, res) => {
    const { id } = req.params
    // Validar un object id
    if(validateObjectId(id, res)) return 

    // Validar que exista
    const service = await Services.findById(id)
    if(!service){
        return handleNotFoundError('El Servicio no existe', res)
    } 

    // Escribimos en el objeto los valores nuevos
    service.name = req.body.name || service.name
    service.price = req.body.price || service.price

    try {
        await service.save()
        res.json({
            msg: 'El servicio se actualizo correctamante'
        })
    } catch (error) {
        console.log(error);
    }
    
}

const deleteService = async(req, res) => {
    const { id } = req.params
    // Validar un object id
    if(validateObjectId(id, res)) return 

    // Validar que exista
    const service = await Services.findById(id)
    if(!service){
        return handleNotFoundError('El Servicio no existe', res)
    } 

    try {
        await service.deleteOne()
        res.json({
            mgs: 'El servicio se elimino correctamante'
        })
    } catch (error) {
        console.log(error);
    }
    
}

export {
    createService,
    getServicies,
    getServiceById,
    updateService,
    deleteService
}