import mongoose from 'mongoose';

const UsuariosDB = new mongoose.Schema({
   
    nombre: {
        type: String,
        lowercase: true,
        trim: true,
        min: 2
    },
    password: {
        type: String,
    },
    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        min: 4
    },
   
    privacidad:{
        type: Boolean,
        default: false
    },
    
    
    
},{timestamps: true });

// ============================
//  Delete password res
// ============================

UsuariosDB.methods.toJSON = function(){
    let userObject = this.toObject();
    delete userObject.password;
    delete userObject.createdAt;
    delete userObject.updatedAt;
    return userObject;
    
};

const Usuario = mongoose.model('Usuarios', UsuariosDB);

export { UsuariosDB, Usuario as default };