# Utiliser une image de node.js comme base
FROM node:21-alpine3.18

WORKDIR app
# Copier les fichiers de votre application dans le conteneur
COPY . .

# Installer les dépendances
RUN npm install

# Exposer le port sur lequel votre application écoute
EXPOSE 3000

# Définir la commande de démarrage de votre application
CMD ["npm", "start"]