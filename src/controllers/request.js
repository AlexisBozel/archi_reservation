const db = require('../config/db');

//GET
exports.getAllRequests = (req, res) => {
  db.query('SELECT * FROM Demandes', (err, rows) => {
      if (err) {
          res.status(500).send({ error: "Erreur serveur" });
          throw err;
      }
      res.status(200).send(rows);
  });
};

//GET
exports.getRequestById = (req, res) => {
  // Exécution de la requête SQL pour récupérer tous les utilisateurs de la table 'Utilisateur'
  const id = req.params.id;
  const query = 'SELECT * FROM Demandes WHERE ID_Demande = ?';
  db.query(query, [id], (err, rows) => {
    if (err) throw err;
    if (rows.length === 0) {
      res.status(404).json({ error: 'Demande non trouvé.' });
    } else {
      const demande = rows[0];
      res.send(demande);
    }
  });
};