# Étape de build pour Vite
FROM node:18 AS build

WORKDIR /app

# Installer les dépendances
COPY package.json package-lock.json ./
RUN npm install

# Copier le reste des fichiers et construire l'application
COPY . .
RUN npm run build

# Étape finale avec Apache
FROM httpd:alpine

# Copier les fichiers de build dans le répertoire par défaut d'Apache
COPY --from=build /app/dist/ /usr/local/apache2/htdocs/

# Exposer le port 80 pour Apache
EXPOSE 80

# Commande de démarrage pour Apache
CMD ["httpd", "-D", "FOREGROUND"]