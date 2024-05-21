import { Environment } from "./environment";
import { Utils } from "../utils/Utils";

Utils.dotenvConfigs();

export const ProdEnvironment: Environment = {
  db_uri: process.env.PROD_DB_URI,
  jwt_secret_key: process.env.PROD_JWT_SECRET_KEY,
  jwt_refresh_secret_key: process.env.PROD_REFRESH_TOKEN_SECRET,
  sendgrid: {
    api_key: process.env.PROD_SENDGRID_API_KEY,
    email_from: process.env.PROD_SENDGRID_SENDER_EMAIL,
  },
  redis: {
    username: process.env.SERVER_REDIS_USERNAME,
    password: process.env.SERVER_REDIS_PASSWORD,
    host: process.env.SERVER_REDIS_HOST,
    port: parseInt(process.env.SERVER_REDIS_PORT),
  },
  stripe: {
    // publishable_key: "",//PUBLISHABLE_API_KEY,
    // secret_key: ""//SECRET_KEY
    publishable_key: process.env.PROD_STRIPE_PUBLISHABLE_KEY,
    secret_key: process.env.PROD_STRIPE_SECRET_KEY, //SECRET_KEY
  },
};
