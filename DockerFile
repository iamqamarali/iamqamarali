FROM node:16.3.0-alpine3.13

# Create app directory
Workdir /app

# Install app dependencies

COPY package*.json ./

RUN npm install

RUN npm run build

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]
