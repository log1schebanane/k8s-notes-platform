# Basis-Image
FROM node:18

# Arbeitsverzeichnis im Container
WORKDIR /app

# Kopiere package.json und installiere Abhängigkeiten
COPY package*.json ./
RUN npm install

# Kopiere den Rest des Codes
COPY . .

# Starte den Server
CMD ["node", "server.js"]

# Der Container hört auf Port 3000
EXPOSE 3000
