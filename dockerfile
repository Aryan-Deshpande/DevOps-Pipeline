FROM node:16.15.0-alpine as build

WORKDIR /app
COPY package.json .
RUN npm install 
COPY . .

ENV port=8080

EXPOSE 8080
CMD [ "node", "server.js" ]


