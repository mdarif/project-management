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

# Bundle app source
COPY . /app

EXPOSE 3000

CMD [ "npm", "run", "start" ]