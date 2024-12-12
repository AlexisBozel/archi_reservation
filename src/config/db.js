const express = require('express');
const mysql = require('mysql2');

const app = express();

// Configuration de la base de données MySQL
const db = mysql.createConnection({
  host: 'my-release-mysql.default.svc.cluster.local',
  port:3307,
  user: 'root',
  password: 'my-root-password',
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