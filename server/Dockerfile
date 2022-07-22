FROM node:16-buster

# What is Dockerfile?
# Dockerfile describes how to build Docker images, 
# while docker-compose is used to run Docker containers.

# Create an application directory
RUN mkdir -p /app

# CD into directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

# Install app dependencies
RUN npm install

# Bundle app source
COPY . /app

EXPOSE 3000

CMD [ "npm", "run", "start" ]