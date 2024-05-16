const { Pool } = require('pg');
require('dotenv').config({ path: `${__dirname}/../.env` })

const pool = new Pool();

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

pool.on('connect', (err, client) => {
  if (err) console.error(err);
  console.log(client);
  console.log('Successfully connected to postgres.');
});

const { Sequelize } = require('sequelize');

// Ensure DATABASE_URL is set in .env file
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set in the .env file');
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  host: 'localhost', // You can remove this line if host is specified in the URL
  port: 5432, // You can remove this line if port is specified in the URL
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;
