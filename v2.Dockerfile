# build stage
FROM node:22-alpine  AS build-stage

WORKDIR /app

COPY package.json .

RUN npm config set registry https://registry.npmmirror.com/

RUN npm install -g npm@11 && npm install

COPY . .

RUN npm run build

# production stage
FROM node:22-alpine  AS production-stage

COPY --from=build-stage /app/dist /app/dist
COPY --from=build-stage /app/package.json /app/package.json

WORKDIR /app

RUN npm config set registry https://registry.npmmirror.com/

RUN npm install -g npm@11 && npm install --omit=dev

EXPOSE 3000

CMD [ "node", "./dist/main.js" ]
