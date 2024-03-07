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

//endpoints

server.get('/movies', (req, res) => {
  res.json({
    success: true,
    movies: [
      {
        id: '1',
        title: 'Gambita de dama',
        genre: 'Drama',
        image:
          '//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/images/gambito-de-dama.jpg',
      },
      {
        id: '2',
        title: 'Friends',
        genre: 'Comedia',
        image:
          '//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/images/friends.jpg',
      },
    ],
  });
});

//importar bibliotecas
const mysql = require('mysql2/promise');

async function getConnection() {
  const connection = await mysql.createConnection({
    host: '127.0.0.1',
    database: 'Adalab-netflix',
    user: 'root',
    password: process.env.MYSQL_PASS,
  });
  await connection.connect();

  console.log(
    `Conexión establecida con la base de datos (identificador=${connection.threadId})`
  );

  return connection;
}
