FROM node:latest

WORKDIR /usr/src/app

COPY . .

RUN apt-get update && \
    apt-get install apache && \
    npm install && \
    npm build && \
    cp ./dist/* /usr/local/apache2/htdocs/

EXPOSE 80