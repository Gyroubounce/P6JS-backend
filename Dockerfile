FROM node:lts-alpine

WORKDIR /app

# Copier uniquement les fichiers nécessaires pour installer les dépendances
COPY package.json package-lock.json ./

RUN npm install --production

# Copier le reste du projet
COPY . .

EXPOSE 8000

CMD ["npm", "start"]
