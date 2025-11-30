# Use the official Node.js image with version 16.20.2
FROM node:16.20.2-alpine

# Set the working directory in the container
WORKDIR /paranormalgpt.com

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Copy the rest of the application code to the working directory
COPY ./public ./public
COPY app.js   ./


# Install app dependencies
RUN npm install

# Expose the port your app runs on (if your app listens on a specific port)
EXPOSE 8054

# Command to run your application
CMD [ "node", "app.js" ]



## Build the image for the local architecture:
#  docker build -t paranormalgpt-image .

## Build the image for multiple architectures and push to Docker Hub
# docker buildx build --platform linux/arm64 -t viniciusop/paranormalgpt.com:v0.1.1 --push .


## Run the image exposing the port and mouting .env file with secrets
#  docker run --name paranormalgpt-container -p 8054:8054 -d -v /Users/vinicius.lage/git/ParanormalGPT.com/.env:/paranormalgpt.com/.env paranormalgpt-image

## Alternatively: run the image from Docker registry
# docker run --name paranormalgpt-container -p 8054:8054 -d -v /Users/vinicius.lage/git/ParanormalGPT.com/.env:/paranormalgpt.com/.env viniciusop/paranormalgpt.com:v0.1.0

## Run the image with iterative shell
#  docker run --name paranormalgpt-container -it -p 8054:8054 -d -v /Users/vinicius.lage/git/ParanormalGPT.com/.env:/paranormalgpt.com/.env paranormalgpt-image sh

## Push the image to Docker hub repository - tag and push it
# docker tag paranormalgpt-image viniciusop/paranormalgpt.com:v0.1.0
# docker push viniciusop/paranormalgpt.com:v0.1.0

