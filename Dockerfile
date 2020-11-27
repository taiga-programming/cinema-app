# Pull from base image 
FROM node:10-alpine

# use app as the working directory
WORKDIR /app

#Copy the file from the current directory from app
COPY . /app

# Install Dependencies
RUN npm install

#Build production app
RUN npm run build

#Listen on the specified port 
EXPOSE 3000

#set node server
ENTRYPOINT npm run start
