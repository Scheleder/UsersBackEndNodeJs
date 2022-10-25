const mongoose = require('mongoose');

const connectToDatabase = async()=>{
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.o3dmy7a.mongodb.net/database`,
        (error)=>{
            if (error){
                return console.log("Ocorreu um erro ao conevtar com o Banco de dados! -> ", error);
            }
            console.log("Conectado ao banco de dados com sucesso!");
        }
    );
};

module.exports = connectToDatabase;