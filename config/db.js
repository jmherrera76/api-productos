
const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env'})



const conectarDB = async () => {
    try {
        
        await mongoose.connect(process.env.DB_MONGO, {
        
        })
        console.log("BD_conectada!");

    } catch (error) {
        console.log(error);
        process.exit(1); /// detenemos la app
    }
}

module.exports = conectarDB 