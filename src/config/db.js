const express = require('express');
const mysql = require('mysql2');

const app = express();

// Configuration de la base de données MySQL
const db = mysql.createConnection({
  host: '172.232.48.55',
  port:3306,
  user: 'alexis',
  password: 'alexisGrosCul123',
  database: 'js-interaction-service'
});

// Connexion à la base de données MySQL
db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données MySQL : ' + err.stack);
    return;
  }
  console.log('Connecté à la base de données MySQL avec l\'identifiant ' + db.threadId);
});

module.exports = db