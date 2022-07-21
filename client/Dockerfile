FROM node:16-buster

# What is Dockerfile?
# Dockerfile describes how to build Docker images, 
# while docker-compose is used to run Docker containers.

# CD into directory
WORKDIR /app

# Install app dependencies
COPY package*.json /app/package.json

# Install app dependencies
RUN npm install

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

# Bundle app source
COPY . /app

EXPOSE 3000

CMD ["npm", "start"]