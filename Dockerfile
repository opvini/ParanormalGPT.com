# Use the official Node.js image with version 16.20.2
FROM node:16.20.2-alpine

# Set the working directory in the container
WORKDIR /paranormalgpt.com

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Copy the rest of the application code to the working directory
COPY ./public ./public
COPY app.js   ./
COPY .env     ./

# Install app dependencies
RUN npm install

# Expose the port your app runs on (if your app listens on a specific port)
EXPOSE 8054

# Command to run your application
CMD [ "node", "app.js" ]



## Build the image:
#  docker build -t paranormalgpt-image .

## Run the image exposing the port
#  docker run -p 8054:8054 -d paranormalgpt-image

## Run the image with iterative shell
#  docker run -it -p 8054:8054 paranormalgpt-image sh
