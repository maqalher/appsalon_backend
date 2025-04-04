import dotenv from 'dotenv'
import colors from 'colors'
import { db } from '../config/db.js'
import Services from '../models/Servicies.js';
import { services } from './beautyServices.js';

dotenv.config()

await db()

async function seedBD() {
    try {
        await Services.insertMany(services)
        console.log(colors.green.bold('Se agregaron los datos correctmante'));
        process.exit()
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

async function clearDB() {
    try {
        await Services.deleteMany()
        console.log(colors.red.bold('Se Eliminaron los datos'));
        process.exit()
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

if(process.argv[2] == '--import'){
    seedBD()
}else{
    clearDB()
}