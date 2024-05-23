const db = require('../config/db');

//GET
exports.getAllUnReadNotifications = (req, res) => {
  // Exécution de la requête SQL pour récupérer tous les utilisateurs de la table 'Utilisateur'
  const id = req.params.id;
  const query = 'SELECT * FROM Notifications JOIN Types_Notification WHERE ID_Destinataire = ? and Statut_Lecture = "1"';
  db.query(query, [id], (err, rows) => {
    if (err) throw err;
    if (rows.length === 0) {
      res.status(404).json({ error: 'Aucune notification non lu non trouvé.' });
    } else {
      const demande = rows[0];
      res.send(demande);
    }
  });
};

//GET
exports.getAllReadNotifications = (req, res) => {
  // Exécution de la requête SQL pour récupérer tous les utilisateurs de la table 'Utilisateur'
  const id = req.params.id;
  const query = 'SELECT * FROM Notifications JOIN Types_Notification WHERE ID_Destinataire = ? and Statut_Lecture = 2';
  db.query(query, [id], (err, rows) => {
    if (err) throw err;
    if (rows.length === 0) {
      res.status(404).json({ error: 'Aucune notification lu.' });
    } else {
      const demande = rows[0];
      res.send(demande);
    }
  });
};

//GET
exports.getAllNotifications = (req, res) => {
  // Exécution de la requête SQL pour récupérer tous les utilisateurs de la table 'Utilisateur'
  const id = req.params.id;
  const query = 'SELECT * FROM Notifications JOIN Types_Notification WHERE ID_Destinataire = ?';
  db.query(query, [id], (err, rows) => {
    if (err) throw err;
    if (rows.length === 0) {
      res.status(404).json({ error: 'Vous n\'avez aucune notification.' });
    } else {
      const demande = rows[0];
      res.send(demande);
    }
  });
};

//POST
exports.addNotification = (req, res) => {
    // Récupération des données POST envoyées dans le corps de la requête
    const { emetteur, destinataire, type, date} = req.body;
  
    // Vérification des données POST
    if (!emetteur || !destinataire || !type || !date) {
      return res.status(400).send('Erreur donnée incorrecte');
    }
  
    // Exécution de la requête SQL pour ajouter un nouvel utilisateur dans la table 'Client'
    const query = 'INSERT INTO Notifications (ID_Emetteur, ID_Destinataire, Type_Notification, Date_Notification, Statut_Lecture) VALUES (?, ?, ?, ?, 1)';
    db.query(query, [emetteur, destinataire, type, date], (err, result) => {
      if (err) throw err;
      res.json({message : `La demande de location pour la propriété ${type} a été ajouté avec succès à la base de données.`});
    });
};

// PUT
exports.readNotificationById = (req, res) => {
    // Récupération des données POST envoyées dans le corps de la requête
    const id = req.params.id;

    // Exécution de la requête SQL pour mettre à jour une demande dans la table 'Demandes'
    const query = 'UPDATE Notifications SET Statut_Lecture = "2" WHERE ID_Notification=?';
    db.query(query, [id], (err, result) => {
    if (err) throw err;
      res.status(200).json({ message: `La notification ${id} a été lu avec succès.`});
    });
};

// DELETE
exports.deleteNotificationById = (req, res) => {
    const id = req.params.id;
    
    // Exécution de la requête SQL pour supprimer une demande dans la table 'Demandes'
    const query = 'DELETE FROM Notifications WHERE ID_Notification=?';
    db.query(query, [id], (err, result) => {
    if (err) throw err;
      res.status(200).json({ message: `La notification ${id} a été supprimé avec succès`});
    });
  };