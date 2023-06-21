import { Sequelize } from "sequelize";

const db = new Sequelize('driveStudent', 'postgres', 'password', {
    host: 'localhost',
    dialect: "postgres",
})

export default db;