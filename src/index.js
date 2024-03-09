require('dotenv').config();

const express = require('express');
const cors = require('cors');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// CONFIGURACIÓN DE MYSQL
async function getConnection() {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DB,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
  });
  await connection.connect();

  console.log(
    `Conexión establecida con la base de datos (identificador=${connection.threadId})`
  );

  return connection;
}


//endpoints

server.get('/api/movies',  async (req, res) => {
  
  // Connectar con la base de datos
  const conn = await getConnection();

  // LANZAR SELECT

  //Cerramos conexión 
  conn.close();

  res.json({
   
  success: true,
  movies:  results

  });
});

//importar bibliotecas
const mysql = require('mysql2/promise');


