import { createTransport } from "../config/nodemailer.js";

export async function sendEmailNewAppointment({date, time}) {
    const tranporter = createTransport(
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT,
        process.env.EMAIL_USER,
        process.env.EMAIL_PASS,
    )

    // Enviar el email
    const info = await tranporter.sendMail({
        from: 'AppSalon <citas@appsalon.com>',
        to: 'admin@appsalon.com',
        subject: "AppSalon - Nueva Cita",
        text: "AppSalon - Nueva Cita",
        html: `<p>Hola: Admin, tienes una nueva cita</p>
            <p>La cita sera el dia: ${date} a las ${time} horas</p>
        `
    })
}

export async function sendEmailUpdateAppointment({date, time}) {
    const tranporter = createTransport(
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT,
        process.env.EMAIL_USER,
        process.env.EMAIL_PASS,
    )

    // Enviar el email
    const info = await tranporter.sendMail({
        from: 'AppSalon <citas@appsalon.com>',
        to: 'admin@appsalon.com',
        subject: "AppSalon - Cita Actualizada",
        text: "AppSalon - Cita Actualizada",
        html: `<p>Hola: Admin, un usuario ha modificado una cita</p>
            <p>La nueva cita sera el dia: ${date} a las ${time} horas</p>
        `
    })
}

export async function sendEmailCancelAppointment({date, time}) {
    const tranporter = createTransport(
        process.env.EMAIL_HOST,
        process.env.EMAIL_PORT,
        process.env.EMAIL_USER,
        process.env.EMAIL_PASS,
    )

    // Enviar el email
    const info = await tranporter.sendMail({
        from: 'AppSalon <citas@appsalon.com>',
        to: 'admin@appsalon.com',
        subject: "AppSalon - Cita Cancelada",
        text: "AppSalon - Cita Cancelada",
        html: `<p>Hola: Admin, un usuario ha cancelado una cita</p>
            <p>La nueva cita estaba programada para: ${date} a las ${time} horas</p>
        `
    })
}