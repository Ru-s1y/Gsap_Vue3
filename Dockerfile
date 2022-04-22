FROM node:16.14.2

COPY ./src /var/www/html

WORKDIR /var/www/html

RUN yarn global add @vue/cli

RUN npm install