import express, { Application } from 'express'
import sequelize from '../database/connection';
import RUser from '../routes/user';
import { User } from './user';

class Server {

    private app: Application;
    private port: string | undefined;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3017';
        this.listen();
        this.midlewares();
        this.rouer();
        this.DBconnet();
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log('this execute from port:' + this.port);

        })
    }

    rouer() {
        this.app.use(RUser)
    }

    midlewares() {
        this.app.use(express.json())
    }
    async DBconnet() {
        try {
            await User.sync();
            console.log('The table for the User model was just (re)created!');

            console.log('Conexion exitosa')

        } catch (error) {
            console.log('Error de conexión:' + error)

        }
    }
}
export default Server