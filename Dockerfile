FROM node:20-alpine as build

WORKDIR /app

# Copie des fichiers de configuration
COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.ts ./
COPY index.html ./
COPY postcss.config.js ./
COPY tailwind.config.js ./
COPY eslint.config.js ./

# Installation des dépendances
RUN npm install

# Copie du code source
COPY src/ ./src/

# Build de l'application
RUN npm run build

# Étape de production avec Nginx
FROM nginx:alpine

# Copie des fichiers de build
COPY --from=build /app/dist /usr/share/nginx/html

# Configuration de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]