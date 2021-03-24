FROM node:10-alpine3.10

WORKDIR ./

COPY . .

RUN npm install package.json

CMD ["npm", "start"]
