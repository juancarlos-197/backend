import {Sequelize} from "sequelize"
const sequelize = new Sequelize('api_nodejs','root','123456789',{
    host:'localhost',
    dialect:'mysql'
})
export  default sequelize