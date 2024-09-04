FROM node:18-alpine

RUN npm install -g @vue/cli

USER node

WORKDIR /app

EXPOSE 8080
EXPOSE 24678

CMD yarn dev
