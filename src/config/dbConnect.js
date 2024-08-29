import mongoose from "mongoose";

async function conectaNaDatabase() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    //após mongodb.net deve-se colocar o nome do banco

    return mongoose.connection; //retorna um objeto para que a api consiga utilizar o db

    //return já é implicitamente assíncrono
}

export default conectaNaDatabase;



