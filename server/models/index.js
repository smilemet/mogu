import Sequelize from "sequelize";
import config from "../config/config.js";

// import initModel

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};

export { db, sequelize };
