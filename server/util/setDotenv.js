import dotenv from "dotenv";
import path from "path";

const __dirname = path.resolve();
const setDotenv = dotenv.config({ path: path.join(__dirname, "../config.env") });

export default setDotenv;
