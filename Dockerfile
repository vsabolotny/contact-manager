FROM node:latest

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install redux 

RUN npm install react-redux

COPY . /app

EXPOSE 3000

CMD ["npm", "start"]