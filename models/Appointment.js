import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema({
    services: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Servicies'
        }
    ],
    date: {
        type: Date
    },
    time: {
        type: String
    },
    totalAmount: {
        type: Number
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Appointment = mongoose.model('Appointment', appointmentSchema)

export default Appointment