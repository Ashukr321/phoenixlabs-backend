import { config } from "dotenv";
config();

const _config = {
  port: process.env.PORT,
};

export default Object.freeze(_config);
