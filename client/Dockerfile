FROM node:16-buster

# What is Dockerfile?
# Dockerfile describes how to build Docker images, 
# while docker-compose is used to run Docker containers.

# Create an application directory
RUN mkdir -p /app

# CD into directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY package*.json ./

# Install app dependencies
RUN npm install

# RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

# Bundle app source
COPY . .

EXPOSE 3000

CMD ["npm", "start"]