import setDotenv from "../util/setDotenv.js";

const config = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.localhost,
  dialect: "mysql",
};

export default config;
