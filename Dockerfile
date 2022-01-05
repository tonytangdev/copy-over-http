FROM node:lts-alpine

ENV NODE_ENV=production
ENV PORT=3000

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN apk add curl

RUN yarn --production

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]