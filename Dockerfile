FROM node:24.19.0-alpine AS build

WORKDIR /app

COPY package*.json .

RUN npm ci 

COPY . . 

RUN npm run build 

FROM node:24.19.0-alpine

WORKDIR /app 

RUN npm i -g serve

COPY --from=build /app/dist .

CMD ["serve", "-s", "-l", "4300", "carsite-webapp/browser"]