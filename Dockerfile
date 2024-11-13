# Étape 1 : Build
FROM node:18 AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le reste du code source
COPY . .

# Construire l'application pour la production
RUN npm run build

# Étape 2 : Serveur léger pour les fichiers statiques
FROM nginx:alpine

# Copier les fichiers de build de l'étape précédente
COPY --from=builder /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Lancer Nginx en mode non-démon
CMD ["nginx", "-g", "daemon off;"]