import Appointment from "../models/Appointment.js";


const getUserAppointments = async (req, res) => {
    const { user } = req.params

    // console.log(typeof user);
    // console.log(typeof req.user._id.toString());
    
    if(user !== req.user._id.toString()){
        const error = new Error('Acceso Denegado')
        return res.status(400).json({msg: error.message})
    }

    try {
        // const appointments = await Appointment.find({user})

        // query si es user adminitrador o normal
        const query = req.user.admin ? { date: { $gte: new Date() } } : { user, date: { $gte: new Date() } }

        const appointments = await Appointment
            .find(query)
            .populate('services')
            .populate({path: 'user', select: 'name email'})
            .sort({date:'asc'})
        res.json(appointments)
    } catch (error) {
        console.log(error);
    }
    
}

export {
    getUserAppointments
}