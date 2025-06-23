import express, { Application } from 'express'
import sequelize from '../database/connection';

class Server {

    private add: Application;
    private port: string | undefined;

    constructor() {
        this.add = express();
        this.port = process.env.PORT || '3017';
        this.listen();
        this.DBconnet();
    }


    listen() {
        this.add.listen(this.port, () => {
            console.log('this execute from port:' + this.port);

        })
    }
    async DBconnet() {
        try {
            await sequelize.authenticate();
            console.log('Conexion exitosa')
        } catch (error) {
            console.log('Error de conexión:'+error)

        }
    }
}
export default Server