# Étape 1 : Build
FROM node:18 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2 : Serveur léger pour les fichiers statiques avec configuration Nginx personnalisée
FROM nginx:alpine

# Copier les fichiers de build
COPY --from=builder /app/dist /usr/share/nginx/html

# Copier la configuration personnalisée de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]