import { registerAs } from '@nestjs/config';

export default registerAs('db', () => ({
  env: process.env.NODE_ENV,
  url: process.env.DB_URL,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
}));
