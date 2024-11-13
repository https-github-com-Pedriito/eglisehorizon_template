# Étape 1: Construire l'application
FROM node:18 AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Étape 2: Servir l'application avec Nginx
FROM nginx:alpine

# Copier le dossier build dans le répertoire public de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copier la configuration personnalisée de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Exposer le port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]