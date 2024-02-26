FROM node:latest

WORKDIR /app

COPY . /app

COPY src /app

RUN npm install

EXPOSE 3000

CMD node index.js