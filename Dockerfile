FROM node:21-alpine

WORKDIR /app

COPY . /app

COPY src /app

RUN npm install

EXPOSE 3000

CMD node index.js