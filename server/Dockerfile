FROM node:16-buster

# What is Dockerfile?
# Dockerfile describes how to build Docker images, 
# while docker-compose is used to run Docker containers.

# Create an application directory
RUN mkdir -p /usr/src/app

# CD into directory
WORKDIR /usr/src/app

# Copy the app package and package-lock.json file
# COPY package.json /app/package.json
# COPY package-lock.json /app/package-lock.json
COPY package*.json /usr/src/app/

# Install app dependencies
RUN npm install

# RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

# Bundle app source
COPY . /usr/src/app/

EXPOSE 3000

CMD [ "npm", "start" ]