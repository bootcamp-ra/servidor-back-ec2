FROM node:15

WORKDIR /var/www/html

COPY package.json .
RUN npm i
COPY . .
RUN npm run build