FROM node:18-alpine

COPY . .

WORKDIR /

RUN npm install

CMD ["npm", "start"]
