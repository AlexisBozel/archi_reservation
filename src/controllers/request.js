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

//POST
exports.addRequest = (req, res) => {
    // Récupération des données POST envoyées dans le corps de la requête
    const { locataire, propietaire, propriete, date, statut} = req.body;
  
    // Vérification des données POST
    if (!locataire || !propietaire || !propriete || !date || !statut) {
      return res.status(400).send('Erreur donnée incorrecte');
    }
  
    // Exécution de la requête SQL pour ajouter un nouvel utilisateur dans la table 'Client'
    const query = 'INSERT INTO Demandes (ID_Locataire, ID_Proprietaire, ID_Propriete, Date_Demande, Statut) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [locataire, propietaire, propriete, date, statut], (err, result) => {
      if (err) throw err;
      res.json({message : `La demande de location pour la propriété ${propriete} a été ajouté avec succès à la base de données.`});
    });
};

// PUT
exports.updateRequestById = (req, res) => {
    // Récupération des données POST envoyées dans le corps de la requête
    const id = req.params.id;

    // Récupération des données POST envoyées dans le corps de la requête
    const { locataire, propietaire, propriete, date, statut} = req.body;
  
    // Vérification des données POST
    if (!locataire || !propietaire || !propriete || !date || !statut) {
      return res.status(400).send('Erreur donnée incorrecte');
    }
    
    // Exécution de la requête SQL pour mettre à jour une demande dans la table 'Demandes'
    const query = 'UPDATE Demandes SET ID_Locataire = ?, ID_Proprietaire=?, ID_Propriete=?, Date_Demande=?, Statut=? WHERE ID_Demande=?';
    db.query(query, [locataire, propietaire, propriete, date, statut, id], (err, result) => {
    if (err) throw err;
      res.status(200).json({ message: `La demande ${id} a été mis à jour avec succès.`});
    });
};

// DELETE
exports.deleteRequestById = (req, res) => {
    const id = req.params.id;
    
    // Exécution de la requête SQL pour supprimer une demande dans la table 'Demandes'
    const query = 'DELETE FROM Demandes WHERE ID_Demande=?';
    db.query(query, [id], (err, result) => {
    if (err) throw err;
      res.status(200).json({ message: `La demande ${id} a été supprimé avec succès`});
    });
  };