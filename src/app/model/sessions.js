import mongoose from 'mongoose';


const SessionsDB = new mongoose.Schema({
   
    nombre: {type: String},
    email: {type: String},
    location: {type: String},
    date_in: {type: String},
    date_out: {type: String},
    date_time: {type: String}
    
},{timestamps: true });


const Sessions = mongoose.model('Sessions', SessionsDB);

export { SessionsDB, Sessions as default };
